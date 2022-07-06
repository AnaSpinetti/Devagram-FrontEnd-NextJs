import { useRef, useState } from "react";
import Avatar from "../componentes/Avatar/avatar";
import Botao from "../componentes/botao/Botao";
import UploadImg from "../componentes/uploadImagem/UploadImg";

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  return (
    <>
      <UploadImg aoSetarAReferencia={(ref) => referenciaInput.current =ref} setImagem={setImagem} imagemPreview={imagem?.preview} />
      <Avatar />
      <Botao cor="invertido" texto={'texto'} />
    </>
  )
}
