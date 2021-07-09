import React from 'react'
import './Results.less'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
export default function Results() {
	return (
		<div className='results'>
			<h1>Results :</h1>
			<div className='block-result'>
				<p style={{ background: '#E0FFFF' }}>
					ВЕС:45,Height:155,Age: 22, POL:Ж
				</p>
				<section
					style={{
						backgroundColor: 'rgb(215, 231, 250)',
						width: '400px',
					}}
				>
					<hr />
					<p
						style={{
							marginRight: '20px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<span>Индекс массы тела (ИМТ)</span>
						<span>22</span>
					</p>
					<hr />
					<p
						style={{
							marginRight: '20px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<span>Вес должен быть в диапазоне</span>
						<span>22</span>
					</p>
					<hr />
					<p
						style={{
							marginRight: '20px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<span>Ваш идеальный вес</span>
						<span>22</span>
					</p>
					<hr />
					<p
						style={{
							marginRight: '20px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<span>Жирность тела</span>
						<span>22</span>
					</p>
					<hr />
				</section>
				<Link to='/'>
					<Button
						style={{
							width: '200px',
							marginTop: '12px',
						}}
						variant='contained'
						color='secondary'
					>
						Таблица ИМТ →
					</Button>
				</Link>
			</div>
		</div>
	)
}
