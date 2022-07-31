import { useEffect, useState } from "react";
import Login from "../componentes/login/Login";
import Home from "../componentes/home/Home";
import UsuarioService from "../services/UsuarioService";


const usuarioService = new UsuarioService();

export default function Index() {
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  useEffect(() =>{
    setEstaAutenticado(usuarioService.estaAutenticado())
  }, [])


  if(estaAutenticado === null){
    return null
  }

  if(estaAutenticado){
    return <Home />
  }

    return <Login aposAutenticacao={() => setEstaAutenticado(true)} />
}
