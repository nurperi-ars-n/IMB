import { Button } from '@material-ui/core'
import React from 'react'
import './Home.less'
import { Link } from 'react-router-dom'

export default function HomePage() {
	return (
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
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tbody>
				<tbody>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tbody>
				<tbody>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tbody>
				<tbody>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tbody>
				<tbody>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tbody>
				<tbody>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tbody>
			</table>
			<Link to='/calculator'>
				<Button style={{ marginTop: '10px' }} color='primary'>
					Расчитать свой ИМТ →
				</Button>
			</Link>
		</div>
	)
}
