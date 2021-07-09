import React from 'react'
import './Calculator.less'
import women from './img/women.png'
import men from './img/men.png'

import Checkbox from '@material-ui/core/Checkbox'
import { Input } from 'antd'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default function Calculator() {
	// const [checked, setChecked] = useState(true)

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
						<Checkbox
							defaultChecked
							color='primary'
							inputProps={{ 'aria-label': 'secondary checkbox' }}
						/>
					</div>
					<div>
						<cite>Мужской</cite>
						<img
							style={{
								width: '20px',
								height: '20px',
								marginLeft: '10px',
							}}
							src={men}
							alt=''
						/>
						<Checkbox
							defaultChecked
							color='primary'
							inputProps={{ 'aria-label': 'secondary checkbox' }}
						/>
					</div>
				</div>
				<div className='data'>
					<section>
						<label>Age :</label>
						<label>Height :</label>
						<label>Weight :</label>
					</section>
					<section>
						<Input style={{ width: '250px', marginTop: '25px' }} />
						<Input style={{ width: '250px', marginTop: '25px' }} />
						<Input style={{ width: '250px', marginTop: '25px' }} />
					</section>
				</div>
				<div className='btns'>
					<Link to='/results'>
						<Button
							style={{ marginRight: '30px' }}
							variant='contained'
							color='primary'
						>
							Расчитать
						</Button>
					</Link>
					<Button variant='contained'>Очистить</Button>
				</div>
			</div>
		</div>
	)
}
