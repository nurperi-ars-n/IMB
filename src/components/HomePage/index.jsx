import { Button } from '@material-ui/core'
import React from 'react'
import './Home.less'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'

export default function HomePage() {
	return (
		<Container maxWidth='md'>
		<div
			style={{
				height: '600px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<h1 data-content='Welcome user!'>Welcome user!</h1>
			<p></p>
			<table>
				<tbody>
					<th colSpan='2'>Индекс массы тела</th>
					<th>Классификация</th>
					<th>Риск сопутствующих заболеваний</th>
				</tbody>
				<tbody>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tbody>
				<tbody>
					<td></td>
					<td> 18.5- 24.9</td>
					<td>Нормальная массы тела</td>
					<td>Обычный</td>
				</tbody>
				<tbody>
					<td></td>
					<td>25-29.9</td>
					<td>Избыточная массы тела(предожирение)</td>
					<td>Повышенный</td>
				</tbody>
				<tbody>
					<td></td>
					<td>30-34.9</td>
					<td>Ожирение 1-степени</td>
					<td>Высокий</td>
				</tbody>
				<tbody>
					<td></td>
					<td>35-39.9</td>
					<td>Ожирение 2-степени</td>
					<td>Очень высокий</td>
				</tbody>
				<tbody>
					<td></td>
					<td>Больше 40</td>
					<td> Ожирение 3-степени</td>
					<td>Чрезвычайно высокий</td>
				</tbody>
				
			</table>
			<Link to='/calculator'>
				<Button style={{ marginTop: '10px' }} color='primary'>
					Расчитать свой ИМТ →
				</Button>
			</Link>
		</div>
	</Container>
	)
}
