import imgEnvelope from '../../public/images/envelope.svg';
import imgCadeado from '../../public/images/key.svg';
import logo from '../../public/images/logoLogin.svg';
import Image from 'next/image';
import Botao from '../botao/Botao';
import { useState } from 'react';
import InputPublico from '../inputPublico/InputPublico';
import Link from 'next/link'

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    return (
        <section className={'paginaLogin paginaPublica'}>
            <div className="logoContainer">
                <Image src={logo} className='logo' alt="Logotipo" layout="fill"  />
            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico imagem={imgEnvelope} texto='Digite o seu email' tipo='email' aoAlterarValor={(e) => setEmail(e.target.value)} valor={email} />
                    <InputPublico imagem={imgCadeado} texto='Digite sua senha' tipo='password' aoAlterarValor={(e) => setSenha(e.target.value)} valor={senha} />
                    <Botao texto='Login' tipo='submit' desabilitado={false} />
                </form>

                <div className='rodapepaginapublica'>
                    <p>Não possui uma conta?</p>
                    <Link href='/cadastro'>Faça seu cadastro agora</Link>
                </div>
            </div>


        </section>
    )
}