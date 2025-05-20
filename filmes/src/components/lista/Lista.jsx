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

                                    <td data-cell="Editar" className="botao_edicao">
                                        <img src={Editar}
                                            id="mensagem"
                                            alt="Caneta"
                                            onClick={() => (props.funcEditar(item))}
                                        />
                                    </td>

                                    <td data-cell="Excluir" className="botao_edicao">
                                        <img src={Excluir}
                                            alt="Lixeira"
                                            onClick={() => (props.funcExcluir(item))}
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
            {/* <div className="pagination">
                <div className="first">&#171</div>
                <div className="prev">&lt</div>
                <div className="numbers">
                    <div>l</div>
                </div>
                <div className="next">&gt</div>
                <div className="last">&#187</div>
            </div> */}
        </section>
    )
}

export default Lista;