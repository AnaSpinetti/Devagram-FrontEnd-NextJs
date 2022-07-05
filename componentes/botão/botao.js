
export default function Botao({type='button', texto, cor='primaria'}){
    return (
        <button type={type} className={`btn ${cor}`}>{texto}</button>
    )
}