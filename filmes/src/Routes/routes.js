import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/login/Login";
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme";
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* http://localhost:3000/  =>  Login */}
                <Route path="/" element={<Login/>} exact/>

                {/* http://localhost:3000/CadastroFilme  => Cadastro de filmes */}
                <Route path="/Filme" element={<CadastroFilme/>}/>

                {/* http://localhost:3000/CadastroGenero  => Cadastro de gênero */}
                <Route path="/Genero" element={<CadastroGenero/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;