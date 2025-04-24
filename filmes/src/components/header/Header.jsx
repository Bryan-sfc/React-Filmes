import "./Header.css";
import Logo from "../../assets/img/logo.svg"

const Header = () => {
    return (
        <header>
            <div className="layout_grid cabecalho">
                <img src={Logo} alt="Logo do Filmoteca"/>

                <nav className="nav_header"> 
                    <a href="" className="link_header">Filme</a>
                    <a href="" className="link_header">Gênero</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;