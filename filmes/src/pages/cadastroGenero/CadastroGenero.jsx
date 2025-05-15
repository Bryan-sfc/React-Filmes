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
    const [listaGenero, setListaGenero] = useState([]);
    // const [itemDelete, setItemDelete] = useState([]);

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

    async function deletarGenero(generoId, titulo, mensagem, icone) {
        Swal.fire({
            title: 'Tem certeza?',
            text: "Você não poderá desfazer esta ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`genero/${generoId.idGenero}`);
                alerta("success", "Gênero Excluido!")
            }
        }).catch(error => {
            console.log(error);
            alerta("error", "Erro ao Excluir!");
        });
    }
    listarGenero();

    async function cadastrarGenero(e) {
        e.preventDefault();
        //Verificar se o input está vindo vazio
        if (genero.trim() != "") {
            //try => tentar(o esperado)
            //catch => lança a exceção
            try {
                //cadastrar um genero: post
                await api.post("genero", { nome: genero });
                alerta("success", "Cadastro realizado com sucesso")
                setGenero("");
            } catch (error) {
                console.log(error);
                alerta("error", "Erro! Entre em contato com o suporte!")
            }
        } else {
            alerta("warning", "Preencha o campo!")
        }
    }

    async function listarGenero() {
        try {
            //await -> Aguarde ter uma resposta da solicitação  
            const resposta = await api.get("genero");

            console.log(resposta.data);

            setListaGenero(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }


    //Teste: Validar o genero
    // useEffect(() => {
    //     console.log(genero);

    // }, [genero]);
    //Fim do teste 

    //Assim que a página renderizar o metodo listarGenero() será chamado
    useEffect(() => {
        listarGenero();
    }, [])

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

                    //Atribuir para, lista o meu estado atual:
                    lista={listaGenero}
                    deletarGenero={deletarGenero}
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero;