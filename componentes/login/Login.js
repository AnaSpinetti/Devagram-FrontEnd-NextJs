import imgEnvelope from '../../public/images/envelope.svg';
import imgCadeado from '../../public/images/key.svg';
import logo from '../../public/images/logoLogin.svg';
import Image from 'next/image';
import Botao from '../botao/Botao';
import { useState } from 'react';
import UsuarioService from '../../services/UsuarioService';

import {validarEmail, validarNome, validarSenha} from '../../utils/validadores';
import InputPublico from '../inputPublico/InputPublico';
import Link from 'next/link'

const usuarioService = new UsuarioService();

export default function Login({aposAutenticacao}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validarFormulario = () => {
        return (
            validarEmail(email) &&
            validarSenha(senha) 
        )
    }
    
    const aoSubmeter = async (e) => {
        e.preventDefault();

        if(!validarFormulario()){
           return
       };
       setIsLoading(true)

       try {
            await usuarioService.login({
                email: email,
                senha
            });

            if(aposAutenticacao){
                aposAutenticacao()
            }
       }catch (error) {
            console.log(error)
           alert('Erro ao realizar login de usuário ' + error?.response?.data?.error )
       }
   
       setIsLoading(false)
   }

    return (
        <section className={'paginaLogin paginaPublica'}>
            <div className="logoContainer">
                <Image src={logo} className='logo' alt="Logotipo" layout="fill"  />
            </div>

            <div className="conteudoPaginaPublica">
                <form onSubmit={aoSubmeter}>
                    <InputPublico imagem={imgEnvelope} texto='Digite o seu email' tipo='email' mensagemValidacao='O email informado é inválido' exibirMensagemValidacao={email && !validarEmail(email)} aoAlterarValor={(e) => setEmail(e.target.value)} valor={email} />
                    <InputPublico imagem={imgCadeado} texto='Digite sua senha' tipo='password' mensagemValidacao='A senha informada é inválida' exibirMensagemValidacao={senha && !validarSenha(senha)} aoAlterarValor={(e) => setSenha(e.target.value)} valor={senha} />
                    <Botao texto='Login' type='submit' desabilitado={!validarFormulario() || isLoading}  />
                </form>

                <div className='rodapepaginapublica'>
                    <p>Não possui uma conta?</p>
                    <Link href='/cadastro'>Faça seu cadastro agora</Link>
                </div>
            </div>


        </section>
    )
}