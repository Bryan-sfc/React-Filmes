import "./Cadastro.css";
import Botao from "../botao/Botao"

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">
                <h1>{props.tituloCadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder={`Digite o nome do ${props.campoPlaceholder}`}
                            value={props.valorInput}

                            //Ao mudar o input algo acontece
                            onChange={(e) => props.setValorInput(e.target.value)}
                        />
                    </div>
                    <div className="campo_cad_genero" style={{ display: props.visibilidade }}>
                        <label htmlFor="genero">Gênero</label>
                        <select name="genero" id="">
                            <option value="" disabled selected>Selecione</option>
                            <option value="">Bolsonaro</option>
                            <option value="">Campeonato de Facada</option>
                            <option value="">Plugados</option>
                        </select>
                    </div>
                    <Botao nomeDoBotao={props.nomeDoBotao} />
                </div>
            </form>
        </section>
    )
}

export default Cadastro;