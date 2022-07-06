import { useEffect, useRef } from "react"

export default function UploadImg({className, setImagem, imagemPreview, imagempreviewClassName='', aoSetarAReferencia}){
    const referenciaInput = useRef(null);

    useEffect(() => {
        if(!aoSetarAReferencia){
            return
        }

        aoSetarAReferencia(referenciaInput?.current)
    }, [referenciaInput?.current])

    const abrirSeletorArquivos = () => {
        referenciaInput?.current?.click();
    }

    const alterarImagem = () => {
        if(!referenciaInput?.current?.files?.length){
            return;
        }

        const arquivo = referenciaInput?.current?.files[0]
        const fileReader = new FileReader();

        fileReader.readAsDataURL(arquivo)
        fileReader.onloadend = () => {
            setImagem({
                preview: fileReader.result,
                arquivo
            })
        }
    }

    return(

        <div className={`uploadImgContainer ${className}`} onClick={abrirSeletorArquivos}>
            {imagemPreview && (
                <div className="imagemPreviewContainer">
                    <img src={imagemPreview} alt='avatar' className={imagempreviewClassName}></img>
                </div>
            )}
            <input type='file' className="oculto" accept="image/*" ref={referenciaInput} onChange={alterarImagem} />
        </div>
    )
}