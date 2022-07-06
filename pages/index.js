import { useRef, useState } from "react";
import Login from "../componentes/login/Login";

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  return (
    <>
      <Login />
    </>
  )
}
