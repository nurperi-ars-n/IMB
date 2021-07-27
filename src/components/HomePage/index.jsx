import { Button } from '@material-ui/core'
import React from 'react'
import './Home.less'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {data} from '../../store/data'
import { RU, KG, EN } from "../../store/actions/auth";
import {switch_language} from '../../store/actions/auth'
import LanguageIcon from '@material-ui/icons/Language';


export default function HomePage() {

	const data = useSelector(state => state.auth.data)
	const dispatch = useDispatch()

	return (
		<div className="home">
			<div style={{display: 'flex', alignItems: 'center', padding: 10}}>
				<LanguageIcon style={{fill: 'black'}}/>
				<Button onClick={() => dispatch(switch_language(RU))} color="primary">RU</Button>
				<Button onClick={() => dispatch(switch_language(EN))}>EN</Button>
			</div>
			<h1>{data.title}</h1>
			{/* <h1>Калькулятор ИМТ</h1> */}
			<table>
				<tbody>
					<th colSpan='2'>Индекс массы тела</th>
					<th><span>Классифи</span><span>кация</span></th>
					<th>Риск сопутствующих заболеваний</th>
				</tbody>
				<tbody>
					<td></td>
					<td>18.5</td>
					<td>Дефицит массы<br/> тела</td>
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
					<td>Избыточная массы тела</td>
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
					<td>Ожирение 3-степени</td>
					<td>Чрезвычайно высокий</td>
				</tbody>
			</table>
			<Link to='/calculator'>
				<Button style={{marginTop: '10px'}} color='primary'>
					Расчитать свой ИМТ →
				</Button>
			</Link>
		</div>
	)
}
