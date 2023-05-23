import React, { useState } from 'react'
import Button from '../Button'
import style from './Form.module.scss';
import { ITarefa } from '../../types/tarefa';
import { v4 as uuidv4 } from 'uuid'

interface Props {
	setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Form({ setTarefas }: Props) {

	const [tarefa, setTarefa] = useState("")
	const [tempo, setTempo] = useState('00:00')

	function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
		evento.preventDefault()
		setTarefas(tarefasAntigas => [...tarefasAntigas, { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() }])
		setTarefa("");
		setTempo('00:00:00')
	}
	return (
		<form className={style.novaTarefa} onSubmit={adicionarTarefa}>
			<div className={style.inputContainer}>
				<label htmlFor="tarefa">
					Adicione um novo estudo
				</label>
				<input type="text" name='tarefa' id='tarefa' value={tarefa} onChange={evento => setTarefa(evento.target.value)} placeholder='O que você quer estudar?' required />
			</div>
			<div className={style.inputContainer}>
				<label htmlFor="tempo">
					Tempo
				</label>
				<input type="time" step="1" name='tempo' id='tempo' value={tempo} onChange={evento => setTempo(evento.target.value)} min="00:00:00" max="01:30:00" required />
			</div>
			<Button type="submit">Adicionar</Button>
		</form>
	)
}

//Abaixo fica o exemplo desta mesma aplicação utilizando class component

// export default class Form extends React.Component<{
// 	setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
// }> {
// 	state = {
// 		tarefa: '',
// 		tempo: '00:00:00'
// 	}

// 	adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
// 		evento.preventDefault()
// 		this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, { ...this.state, selecionado: false, completado: false, id: uuidv4() }])
// 		this.setState({
// 			tarefa: "",
// 			tempo: '00:00:00'
// 		})
// 	}

// 	render(): React.ReactNode {
// 		return (
// 			<form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
// 				<div className={style.inputContainer}>
// 					<label htmlFor="tarefa">
// 						Adicione um novo estudo
// 					</label>
// 					<input type="text" name='tarefa' id='tarefa' value={this.state.tarefa} onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })} placeholder='O que você quer estudar?' required />
// 				</div>
// 				<div className={style.inputContainer}>
// 					<label htmlFor="tempo">
// 						Tempo
// 					</label>
// 					<input type="time" step="1" name='tempo' id='tempo' value={this.state.tempo} onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })} min="00:00:00" max="01:30:00" required />
// 				</div>
// 				<Button type="submit">Adicionar</Button>
// 			</form>
// 		)
// 	}
// }