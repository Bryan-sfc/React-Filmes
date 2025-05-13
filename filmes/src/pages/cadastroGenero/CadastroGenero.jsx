import { useEffect, useState } from "react";
import api from "../../Services/services"

//Importar o seu SweetAlert
import Swal from 'sweetalert2'

//Importação de componentes:
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

const CadastroGenero = () => {
    //nome do gênero
    const [genero, setGenero] = useState("");

    function alerta(icone, mensagem) {
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

    async function cadastrarGenero(evt) {
        evt.preventDefault();
        //Verificar se o input está vindo vazio
        if (genero.trim() != "") {
            //try => tentar(o esperado)
            //catch => lança a exceção
            try {
                //cadastrar um genero: post
                await api.post("genero", { nome: genero });
                alerta("Sucess", "Cadastro realizado com sucesso")
                setGenero("");
            } catch (error) {
                console.log(error);
                alerta("error", "Erro! Entre em contato com o suporte!")
            }
        } else {
            alerta("warning", "Preencha o campo!")
        }

    }

    //Teste: Validar o genero
    // useEffect(() => {
    //     console.log(genero);

    // }, [genero]);
    //Fim do teste 

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none"
                    campoPlaceholder="Gênero"
                    nomeDoBotao="Cadastrar"

                    //Atribuindo a função:
                    funcCadastro={cadastrarGenero}

                    //Atribuindo o valor ao input:
                    valorInput={genero}

                    //Atribuidno a função que atualiza o meu gênero:
                    setValorInput={setGenero}
                />
                <Lista
                    tituloLista="Lista de Gêneros"
                    visivel="none"
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero;