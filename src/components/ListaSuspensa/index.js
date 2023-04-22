import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
        const options = props.opt
        const aoClicar = (event) => {
            let valor = event.target.value
            props.aoAlterar(valor)
            console.log(valor)

        }

        return (
            <div className="lista-suspensa">
                <label>{props.label}</label>
                <select required={props.required} value={props.valor} onChange={aoClicar}>
                    {options.map((valor, index) => <option className="opcao" key={index}>{valor}</option>)}
                </select>
            </div>
        )
}

export default ListaSuspensa;