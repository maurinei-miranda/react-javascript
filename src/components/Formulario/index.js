import './formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'


export const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
        ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        console.log(event)
        event.preventDefault();
        props.Adicionar({nome, cargo, imagem, time})
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do colaborador</h2>
                <CampoTexto valor={nome} aoAlterar={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite o nome"/>
                <CampoTexto valor={cargo} aoAlterar={valor => setCargo(valor)} label="Cargo" placeholder="Digite o cargo"/>
                <CampoTexto valor={imagem} aoAlterar={valor => setImagem(valor)}label="Imagem" placeholder="URL da imagem"/>
                <ListaSuspensa valor={time} aoAlterar={valor => setTime(valor)} required={true} label="Time" opt={times}/>
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}