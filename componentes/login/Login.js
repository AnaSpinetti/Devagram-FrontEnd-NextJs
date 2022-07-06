import imgEnvelope from '../../public/images/envelope.svg';
import imgCadeado from '../../public/images/key.svg';

export default function Login(){
    return (
        <section className={'paginaLogin paginaPublica'}>
            <div className="logoContainer">

            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <Input imagem={imgEnvelope} texto='Digite o seu email' tipo='email' aoAlterarValor={} />
                    <Input imagem={imgCadeado} texto='Digite o seu email' tipo='email' aoAlterarValor={} />
                </form>
            </div>

        </section>
    )
}