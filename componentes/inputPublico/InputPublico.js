import Image from 'next/image'

export default function InputPublico({imagem, tipo, texto, valor='', exibirMensagemValidacao=false, mensagemValidacao='', aoAlterarValor}){
    return(
        <div className="inputPublicoContainer">
            <div className="inputPublico">
                <Image className='logo' src={imagem}  width={20} heigth={20} alt="imagem do campo" />
                <input type={tipo} placeholder={texto} value={valor} onChange={aoAlterarValor} className="iconeInputPublico" />
             </div>
            {exibirMensagemValidacao && <p className='mensagemValidacao'>{mensagemValidacao}</p>}
        </div>
    )
}


