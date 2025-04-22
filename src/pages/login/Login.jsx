import Logo from "../../assets/img/logo.svg";
import "./Login.css"

const Login = () =>  {
    return (
        <main className= "main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Filmoteca"/>

                <form action="" className="form_login">

                    <h1>Login</h1>
                    <div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="Email" name="email" placeholder="Digite seu Email"/>
                        </div>

                        <div>
                            <label htmlFor="senha">Senha:</label>
                            <input type="Password" name="senha" placeholder="Digite sua Senha"/>
                        </div>
                    </div>

                    <div>
                        <button>Entrar</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login;