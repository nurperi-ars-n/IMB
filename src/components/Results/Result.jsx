import React, { useEffect, useState } from 'react'
import './Results.less'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from "react-redux"

import { RU, KG, EN } from "../../store/actions/auth";
import {switch_language} from '../../store/actions/auth'
import LanguageIcon from '@material-ui/icons/Language';


export default function Results() {

     const state = useSelector((state)=> state.index)
	 const data = useSelector(state => state.auth.data)

	 const dispatch = useDispatch()

	 return(
		<div className='results'>
			<div style={{display: 'flex', alignItems: 'center', padding: 10}}>
				<LanguageIcon style={{fill: 'black'}}/>
				<Button onClick={() => dispatch(switch_language(RU))} color="primary">RU</Button>
				<Button onClick={() => dispatch(switch_language(EN))}>EN</Button>
			</div>
			<h1 style={{color:"black"}}>Результаты</h1>
			<div className='block-result'>
				<p className="detals">
				{data.weightOne}:{state.weight} {""} 
				{data.heightOne}ь:{state.height} {""}
				{data.ageOne}:{state.age} {""} 
				{data.apol}:{state.pol === true ? 'Женщина' : 'Мужчина'}
				</p>
				<section>
					<p>
						<span>{data.index}</span>
						<span>{state.imt}</span>
					</p>
					<p>
						<span>{data.perfect}</span>
						<span>{state.perfectVes}</span>
					</p>
					<p>
						<span>{data.fat}</span>
						<span>{state.imt <= 21 ? '13,5-24%' : state.imt < 40  ? '25-39%' : '40,5-54%'}</span>
					</p>
				</section>
				<Link to='/'>
					<Button
						style={{
							width: '200px',
							marginTop: '12px',
							borderRadius:20,
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
							borderRadius:20
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
