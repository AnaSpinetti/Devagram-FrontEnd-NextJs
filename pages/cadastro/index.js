import { useState } from 'react';
import UsuarioService from '../../services/UsuarioService';

import Image from 'next/image';
import InputPublico from '../../componentes/inputPublico/InputPublico';
import UploadImg from '../../componentes/uploadImagem/UploadImg'
import Botao from '../../componentes/botao/Botao';
import Link from 'next/link'

import imgEnvelope from '../../public/images/envelope.svg'
import imgCadeado from '../../public/images/key.svg';
import userIcon from '../../public/images/userIcon.svg';
import logo from '../../public/images/logoLogin.svg';
import imgDefault from '../../public/images/avatarDefault.svg';
import {useRouter} from 'next/router';

import { validarEmail, validarSenha, validarConfirmacaoSenha, validarNome } from '../../utils/validadores';

const usuarioService = new UsuarioService();

export default function Cadastro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
    const [imagem, setImagem] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const validarFormulario = () => {
        return (
            validarEmail(email) &&
            validarSenha(senha) &&
            validarConfirmacaoSenha(senha, senhaConfirmacao) &&
            validarNome(nome)
        )
    }

    const aoSubmeter = async (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }

        setIsLoading(true);

        try {
            const corpoReqCadastro = new FormData();
            corpoReqCadastro.append("nome", nome);
            corpoReqCadastro.append("email", email);
            corpoReqCadastro.append("senha", senha);

            if (imagem?.arquivo) {
                corpoReqCadastro.append("file", imagem.arquivo);
            }


            await usuarioService.cadastro(corpoReqCadastro);
            await usuarioService.login({
                login: email,
                senha
            });

            router.push('/')

        } catch (error) {
                alert('Erro ao cadastrar usuário ' + error?.response?.data?.error )
            }
    
            setIsLoading(false)
    }

    return(

        <section className={'paginaCadastro paginaPublica'}>
            <div className="logoContainer desktop">
                <Image src={logo} className='logo' alt="Logotipo" layout="fill"  />
            </div>

            <div className="conteudoPaginaPublica">
                <form onSubmit={aoSubmeter}>
                    <UploadImg imagempreviewClassName="avatar avatarPreview" imagemPreview={imagem?.preview || imgDefault.src} setImagem={setImagem} />
                    <InputPublico mensagemValidacao='Nome inválido, deve possuir mais de 2 caracteres' exibirMensagemValidacao={nome && !validarNome(nome)} imagem={userIcon} texto='Digite o seu nome' tipo="text" aoAlterarValor={(e) => setNome(e.target.value)} valor={nome} />
                    <InputPublico mensagemValidacao='Email inválido' exibirMensagemValidacao={email && !validarEmail(email)} imagem={imgEnvelope} texto='Digite o seu email' tipo="email" aoAlterarValor={(e) => setEmail(e.target.value)} valor={email} />
                    <InputPublico mensagemValidacao='Senha inválida, deve possuir mais de 3 caracteres' exibirMensagemValidacao={senha && !validarSenha(senha)} imagem={imgCadeado} texto="Digite sua senha" tipo="password" aoAlterarValor={(e) => setSenha(e.target.value)} valor={senha} />
                    <InputPublico mensagemValidacao='As senhas não conferem' exibirMensagemValidacao={senhaConfirmacao && !validarConfirmacaoSenha(senha, senhaConfirmacao)} imagem={imgCadeado} texto="Confirme sua Senha" tipo="password" aoAlterarValor={(e) => setSenhaConfirmacao(e.target.value)} valor={senhaConfirmacao} />
                    <Botao texto='Cadastrar' type='submit' desabilitado={!validarFormulario() || isLoading} />
                </form>

                <div className='rodapepaginapublica'>
                    <p>Já possui uma conta?</p>
                    <Link href='/'>Faça seu login agora</Link>
                </div>
            </div>


        </section>
  
    )
}