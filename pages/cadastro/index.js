export default function Cadastro(){
    return(

        <section className={'paginaCadastro paginaPublica'}>
            <div className="logoContainer">
                <Image src={logo} className='logo' alt="Logotipo" layout="fill"  />
            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico imagem={imgEnvelope} texto='Digite o seu email' tipo='email' aoAlterarValor={(e) => setEmail(e.target.value)} valor={email} />
                    <InputPublico imagem={imgCadeado} texto='Digite sua senha' tipo='password' aoAlterarValor={(e) => setSenha(e.target.value)} valor={senha} />
                    <Botao texto='Login' tipo='submit' desabilitado={false} />
                </form>


            </div>


        </section>
  
    )
}