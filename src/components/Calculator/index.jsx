import React, { useState } from 'react'
import './Calculator.less'
import women from './img/women.png'
import men from './img/men.png'
import Container from '@material-ui/core/Container'

import { Input } from 'antd'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { change_user } from '../../store/actions'

export default function Calculator() {
	const dispatch = useDispatch()
	const [age, setAge] = useState()
	const [weight, setWeight] = useState()
	const [height, setHeight] = useState()
	const [pol, setPol] = useState(true)
	const history = useHistory()

	const checkAccount = () => {
		let info = /\d+/g

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
			alert('заполните данные/Должны быть только цифры!')
		}
	}

	return (
		<Container maxWidth='md'>
			<div className='calculator'>
				<h1>Calculator IMB</h1>
				<div className='block'>
					<h2>Входные данные :</h2>
					<div className='switch'>
						<div>
							<cite>Женский</cite>
							<img
								style={{
									marginLeft: '10px',
								}}
								src={women}
								alt=''
							/>
							<input
								onChange={() => setPol(true)}
								className='check'
								name='dzen'
								type='radio'
							/>
						</div>
						<div>
							<cite>Мужской </cite>
							<img
								style={{
									width: '20px',
									height: '20px',
									marginLeft: '10px',
								}}
								src={men}
								alt=''
							/>
							<input
								onChange={() => setPol(false)}
								className='check'
								name='dzen'
								type='radio'
							/>
						</div>
					</div>
					<div className='data'>
						<section>
							<label>Age : </label>
							<label>Height : </label>
							<label>Weight : </label>
						</section>
						<section>
							<Input
								onChange={(e) => setAge(e.target.value)}
								value={age}
								style={{ width: '250px', marginTop: '25px' }}
							/>
							<Input
								onChange={(e) => setHeight(e.target.value)}
								value={height}
								style={{ width: '250px', marginTop: '25px' }}
							/>
							<Input
								onChange={(e) => setWeight(e.target.value)}
								value={weight}
								style={{ width: '250px', marginTop: '25px' }}
							/>
						</section>
					</div>
					<div className='btns'>
						<Button
							onClick={() => {
								checkAccount()
							}}
							style={{ width: '300px' }}
							variant='contained'
							color='primary'
						>
							Расчитать
						</Button>
					</div>
				</div>
			</div>
		</Container>
	)
}
