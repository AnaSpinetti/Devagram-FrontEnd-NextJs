import Image from 'next/image';
import { useState } from 'react';
import logoHorizontal from '../../public/images/logo.svg';
import lupa from '../../public/images/lupa.svg'
import Navegacao from './Navegacao'
import ResultadoPesquisa from './ResultadoPesquisa';

export default function Header(){
    const [resultadoPesquisa, setResultadoPesquisa] = useState([])
    const [termoPesquisado, setTermoPesquisado] = useState('')

    

    const aoClicarResultadoPesquisa = (id) => {

    }

    return(
        <header className='cabecalhoPrincipal'>
            <div className='conteudoCabecalhoPrincipal'>
                <div className='logoCabecalhoPrincipal'>
                    <Image src={logoHorizontal} alt='Logo Devagram' layout='fill' />
                </div>

                <div className='barraPesquisa'>
                    <div className='barraPesquisa'>
                        <div className='containerImagemLupa'>
                            <Image src={lupa} alt='Icone lupa' layout='fill' width={20} height={20} />
                        </div>
                        <input type='text' placeholder='Pesquisar' value={termoPesquisado} onChange={((e) => setTermoPesquisado(e.target.value))}/>
                    </div>
                </div>

                <Navegacao className='desktop' />
            </div>

            {resultadoPesquisa.length > 0 && (
            <div className='resultadoPesquisaContainer'>
                {resultadoPesquisa.map(r => <ResultadoPesquisa avatar={r.avatar} nome={r.nome} email={r.email} key={r._id} id={r._id} onClick={aoClicarResultadoPesquisa} />
                )}
            </div>
            )}
        </header>
    )
}