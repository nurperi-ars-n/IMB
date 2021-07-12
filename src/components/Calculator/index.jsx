import React, {useState } from 'react'
import './Calculator.less'
import women from './img/women.png'
import men from './img/men.png'

import { Input } from 'antd'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { change_user } from '../../store/actions'

export default function Calculator() {
	const dispatch = useDispatch()
	const [age, setAge] = useState()
	const [imt] = useState()
	const [perfectVes] = useState()
	const [weight, setWeight] = useState()
	const [height, setHeight] = useState()
	const [pol, setPol] = useState(true)

	return (
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
					<Link to='/results'>
						<Button
							onClick={() =>
								dispatch(
									change_user({
										age,
										pol,
										weight,
										height,
										imt,
										perfectVes,
									}),
								)
							}
							style={{ width: '300px' }}
							variant='contained'
							color='primary'
						>
							Расчитать
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
