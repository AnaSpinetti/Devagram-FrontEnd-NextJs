import userActive from '../../public/images/userActive.svg'
import homeActive from '../../public/images/homeActive.svg'
import plusActive from '../../public/images/plusActive.svg'

import userCinza from '../../public/images/userCinza.svg'
import homeCinza from '../../public/images/homeCinza.svg'
import plusCinza from '../../public/images/plusCinza.svg'
import Image from 'next/image'

export default function Navegacao({className}){
    return(
        <nav className= {`barraNavegacao ${className}`}>
            <ul>
                <li><Image src={homeActive} alt='ícone home' width={20} height={20} /></li>
                <li><Image src={plusCinza} alt='ícone criar publicação' width={20} height={20} /></li>
                <li><Image src={userCinza} alt='ícone usuário' width={20} height={20} /></li>
            </ul>
        </nav>
    )
}