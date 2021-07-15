import React, { useEffect, useState } from 'react'
import './Results.less'

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux'

export default function Results() {
	const state = useSelector((state) => state)
	// if (state.imt > 13) {
	// 	return (state.fat = '13,5%-24%')
	// } else if (state.imt > 21) {
	// 	return (state.fat = '25%-39%')
	// } else if (state.imt > 41) {
	// 	return (state.fat = '40,5%-54%')
	// } else {
	// 	return (state.fat = state.fat)
	// }
	return (
		<div className='results'>
			<h1>Results :</h1>
			<div className='block-result'>
				<p style={{ background: '#E0FFFF' }}>
					Weight:{state.weight}, Height:{state.height}, Age:
					{state.age}, POL:{state.pol === true ? 'women' : 'men'}
				</p>
				<section
					style={{
						backgroundColor: 'rgb(215, 231, 250)',
						width: '500px',
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
						<span>{state.imt}</span>
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
						<span>{state.perfectVes}</span>
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
						<span>{state.fat}</span>
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
				<Link to='/calculator'>
					<Button
						style={{
							width: '200px',
							marginTop: '12px',
						}}
						variant='contained'
						color='secondary'
					>
						Назад →
					</Button>
				</Link>
			</div>
		</div>
	)
}
