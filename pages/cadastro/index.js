import { useState } from 'react';

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


export default function Cadastro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
    const [imagem, setImagem] = useState(null);

    return(

        <section className={'paginaCadastro paginaPublica'}>
            <div className="logoContainer desktop">
                <Image src={logo} className='logo' alt="Logotipo" layout="fill"  />
            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <UploadImg imagempreviewClassName="avatar avatarPreview" imagemPreview={imagem?.preview || imgDefault.src} />
                    <InputPublico imagem={userIcon} texto='Digite o seu nome' tipo="text" aoAlterarValor={(e) => setNome(e.target.value)} valor={nome} />
                    <InputPublico imagem={imgEnvelope} texto='Digite o seu email' tipo="email" aoAlterarValor={(e) => setEmail(e.target.value)} valor={email} />
                    <InputPublico imagem={imgCadeado} texto="Digite sua senha" tipo="password" aoAlterarValor={(e) => setSenha(e.target.value)} valor={senha} />
                    <InputPublico imagem={imgCadeado} texto="Confirme sua Senha" tipo="password" aoAlterarValor={(e) => setSenhaConfirmacao(e.target.value)} valor={senhaConfirmacao} />
                    <Botao texto='Login' tipo='submit' desabilitado={false} />
                </form>

                <div className='rodapepaginapublica'>
                    <p>Já possui uma conta?</p>
                    <Link href='/'>Faça seu login agora</Link>
                </div>
            </div>


        </section>
  
    )
}