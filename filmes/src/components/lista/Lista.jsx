import "./Lista.css";

import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"

const Lista = (props) => {
    return (
        <section className="layout_grid listagem">
            <h1>{props.tituloLista}</h1>
            <hr />

            <div className="tabela">
                <table>
                    {/* cabeçalho da tabela: */}
                    <thead>
                        {/* tr => table row */}
                        <tr className="table_cabecalho">
                            {/* th => table head */}
                            <th>Nome</th>
                            <th style={{ display: props.visivel }}>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                            <th></th>
                        </tr>
                    </thead>
                    {/* tbody => corpo da tabela */}
                    <tbody id="tabela_excluir">
                        {/* verificar se a lista está vindo vazia */}
                        {props.lista && props.lista.length > 0 ? (
                            props.lista.map((item) => (
                                <tr className="item_lista" key={item.idGenero}>
                                    <td data-cell="Nome">{item.nome}</td>
                                    <td data-cell="Gênero" style={{ display: props.visivel }}>Ação</td>

                                    <td data-cell="Editar">
                                        <button className="botao_edicao">
                                            <img src={Editar} alt="Caneta" />
                                        </button>
                                    </td>

                                    <td data-cell="Excluir" className="botao_edicao">
                                        <img src={Excluir}
                                            alt="Lixeira"
                                            onClick={() => (props.deletarGenero(item))}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) :
                            (
                                <p>Nenhum gênero foi encontrado.</p>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;