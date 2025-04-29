import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

const CadastroGenero = () => {
    return(
        <>
            <Header/>
            <main>
                <Cadastro 
                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none"
                    campoPlaceholder="Gênero"
                    nomeDoBotao="Cadastrar"
                />
                <Lista
                    tituloLista="Lista de Gêneros"
                    visivel="none"
                />
            </main>
            <Footer/>
        </>
    )
}

export default CadastroGenero;