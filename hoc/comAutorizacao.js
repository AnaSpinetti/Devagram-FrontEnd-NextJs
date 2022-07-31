import { useRouter } from 'next/router';
import UsuarioService  from '../services/UsuarioService';
import Header from '../componentes/layout/header';
import Footer from '../componentes/layout/Footer';

const usuarioService = new UsuarioService();

export default function comAutorizacao(Componente) {
    return (props) => {
        const router = useRouter()

        if (typeof window !== 'undefined') {
            if (!usuarioService.estaAutenticado()) {
                router.replace('/');
                return null;
            }



            return (
                <>
                    <Header />
                    <Footer />
                    <Componente {...props} />
                </>
            )
        }

        return null;
    }
}

