import { Button } from '@material-ui/core'
import React from 'react'
import './Home.less'
import { Link } from 'react-router-dom'

export default function HomePage() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<table>
				<tr>
					<th colspan='2'>Индекс массы тела</th>
					<th>Классификация</th>
					<th>Риск сопутствующих заболеваний</th>
				</tr>
				<tr>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tr>
				<tr>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tr>
				<tr>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tr>
				<tr>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tr>
				<tr>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tr>
				<tr>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tr>
				<tr>
					<td></td>
					<td>Менее 18.5</td>
					<td>Дефицит массы тела</td>
					<td>Низкий (повышен риск других заболеваний)</td>
				</tr>
			</table>
			<Link to='/calculator'>
				<Button style={{}} color='primary'>
					Расчитать свой ИМТ →{' '}
				</Button>
			</Link>
		</div>
	)
}
