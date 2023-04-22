import './CampoTexto.css'

const CampoTexto = (props) => {    
    const place = `${props.placeholder}`
    
    const aoDigitado = (event) => {
        props.aoAlterar(event.target.value)
    }

    return(
        <div className="campo-texto">
            <label> {props.label} </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type='text' placeholder={place}/>
        </div>
    )
}

export default CampoTexto;