import { useState, useEffect } from "react";
import api from "../../Services/services"
import Swal from 'sweetalert2'

import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {

    const [listaGenero, setListaGenero] = useState([]);
    const [genero, setGenero] = useState("");
    const [filme, setFilme] = useState("");

    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

    //Função para trazer os gêneros no meu select
    async function listarGenero() {
        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function cadastrarFilme(e) {
        e.preventDefault();

        if (filme.trim() !== "") {
            try {
                await api.post("filme", { titulo: filme, IdGenero: genero });
                alertar("success", "Sucesso! Cadastro realizado com sucesso!");
                setFilme("");
                setGenero("");
                
            } catch (error) {
                console.log(error);
            }
        } else {
            alertar("success", "Sucesso! Filme Cadastrado");
        }
    }

    useEffect(() => {
        listarGenero();
    }, [])

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
                    setValorSelect={setGenero}
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