import React, { useState } from 'react'
import './Calculator.less'
import women from './img/women.png'
import men from './img/men.png'
import swal from 'sweetalert'

import { change_user } from '../../store/actions'
import Container from '@material-ui/core/Container'
// import { Alert } from 'antd'
import { Input } from 'antd'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { change_user } from "../../store/actions/index"

import { RU, KG, EN } from "../../store/actions/auth";
import {switch_language} from '../../store/actions/auth'
import LanguageIcon from '@material-ui/icons/Language';

export default function Calculator() {

	const mostrarAlerta = () =>{
		swal({
			title:"Ошибка!",
			text:"заполните данные/Должны быть только цифры!",
			icon:"error",
			button:'Хорощо!'
		})
	}

	const data = useSelector(state => state.auth.data)

	const dispatch = useDispatch()
	const [age, setAge] = useState()
	const [weight, setWeight] = useState()
	const [height, setHeight] = useState()
	const [pol, setPol] = useState(true)
	// const [open, setOpen] = useState(false)
	const history = useHistory()
	
	const checkAccount = () => {
		let info = /\d/g
		if (info.test(weight) && info.test(height)) {
			return (
				dispatch(
					dispatch(
						change_user({
							age,
							pol,
							weight,
							height,
						}),
					),
				) && history.push('/results')
			)
		} else {
			mostrarAlerta()
		}
	}

	return (
	       <div className='calculator'>
			   <div style={{display: 'flex', alignItems: 'center', padding: 10}}>
					<LanguageIcon style={{fill: 'black'}}/>
					<Button onClick={() => dispatch(switch_language(RU))} color="primary">RU</Button>
					<Button onClick={() => dispatch(switch_language(EN))}>EN</Button>
				</div>
				{/* <h1 style={{color: 'black'}}><span>Калькулятор</span> ИMT</h1> */}
				<div className='block'>
					<div className='switch'>
						<div>
							<cite>{data.gender}</cite>
							<img style={{marginLeft: '0px',}} src={women} alt=''/>
							<input onChange={() => setPol(true)} className="check"name='dzen' type='radio'/>
						</div>
						<div>
							<cite>{data.man}</cite>
							<img style={{width: '20px',height: '20px',marginLeft: '0px',}}
								src={men} alt=''
							/>
							<input onChange={() => setPol(false)} className="check"
								name='dzen'
								type='radio'
							/>
						</div>
					</div>
					<div className='data'>
						<section>
							<label>{data.ageOne}:</label>
							<label>{data.heightOne} :</label>
							<label>{data.weightOne}:</label>
						</section>
						<section>
							<Input onChange={(e) => setAge(e.target.value)} value={age} className="input"/>
							<Input onChange={(e) => setHeight(e.target.value)} value={height} className="input"/>
							<Input onChange={(e) => setWeight(e.target.value)} value={weight} className="input"/>
						</section>
					</div>
					<div className='btns'>
						<Button
							onClick={() => {
								checkAccount()
							}}
							style={{ width: '300px'}}
							variant='contained'
							color='primary'
							
						>
							{data.button}
						</Button>
					</div>
				</div>
			</div>
		)
}
