import React, { useState } from "react";
import { ITarefa } from "../../type/ITarefa";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario( {setTarefas}: Props ){

    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        
        setTarefas(tarefasAntigas => [
            ...tarefasAntigas,
            {
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
        ]);

        setTarefa("");
        setTempo("00:00");
    }

    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input type="text"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    name="tarefa" id="tarefa" placeholder="O que você quer estudar" required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tmepo">Tempo</label>
                <input type="time"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required />
            </div>
            <Botao type="submit">Adicionar</Botao>
        </form>
    )
}

/*class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
    
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        
        this.props.setTarefas(tarefasAntigas => [
            ...tarefasAntigas,
            {
                ...this.state,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
        ]);


        this.setState({
            tarefa: "tarefa",
            tempo: "00:00"
        })
    }

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                        name="tarefa" id="tarefa" placeholder="O que você quer estudar" required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tmepo">Tempo</label>
                    <input type="time"
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value })}
                        step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }
}*/