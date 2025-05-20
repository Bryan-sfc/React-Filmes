import { useState, useEffect } from "react";
import api from "../../Services/services"

import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {

    const [listaGenero, setListaGenero] = useState([]);
    const [genero, setGenero] = useState("");
    const [filme, setFilme] = useState("");

    //Função para trazer os gêneros no meu select
    async function listarGenero() {
        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    function cadastrarFilme() {
        // try {
            
        // } catch (error) {
            
        // }
        alert("depressão voltou")
    }

    useEffect(() => {
        listarGenero();
    }, [listaGenero])

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    campoPlaceholder="Filme"
                    nomeDoBotao="Cadastrar"

                    lista={listaGenero}
                    
                    funcCadastro={cadastrarFilme}

                    valorInput={filme}
                    setValorInput={setFilme}

                    valorSelect={genero}
                    setValorGenero={setGenero}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme; 