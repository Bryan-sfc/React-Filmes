import "./Cadastro.css";
import Botao from "../botao/Botao"

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form action="" className="layout_grid form_cadastro">
                <h1>{props.tituloCadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder={`Digite o nome do ${props.campoPlaceholder}`}/>
                    </div>
                    <div className="campo_cad_genero" style={{display:props.visibilidade}}>
                        <label htmlFor="genero">Gênero</label>
                        <select name="genero" id="">
                            <option  value="" disabled selected>Selecione</option>
                            <option value="">Bolsonaro</option>
                            <option value="">Campeonato de Facada</option>
                            <option value="">Maconha</option>
                        </select>
                    </div>
                    <Botao nomeDoBotao={props.nomeDoBotao}/>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;