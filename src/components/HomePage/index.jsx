import React from 'react'
import './Home.less'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RU,EN } from "../../store/actions/auth";
import {switch_language} from '../../store/actions/auth'
import LanguageIcon from '@material-ui/icons/Language';


import { Button } from '@material-ui/core'

export default function HomePage() {

	const data = useSelector(state => state.auth.data)
	const dispatch = useDispatch()

	return (
		<div className="home">
			<div className="nav">
				<div>
					<h2 style={{color:'white'}}>{data.header}</h2>
				</div>
				<div style={{display:'flex'}} > 
				    <LanguageIcon style={{fill: 'white',marginTop:5}} />
					<Button onClick={() => dispatch(switch_language(RU))} style={{color:'white'}}>RU</Button>
					<Button onClick={() => dispatch(switch_language(EN))} style={{color:'white'}} >EN</Button>
				</div>
			</div>
			<div  className="block">
				<h1 style={{color:'#d65443'}}>{data.title}</h1>
				<table> 
					<tbody> 
						<th colSpan='2'>{data.one}</th> 
						<th>{data.two}</th> 
						<th>{data.three}</th> 
					</tbody> 
					<tbody> 
						<td></td> 
						<td>18.5</td> 
						<td>{data.four}</td> 
						<td>{data.five}</td> 
					</tbody> 
					<tbody> 
						<td></td> 
						<td> 18.5- 24.9</td> 
						<td>{data.six}</td> 
						<td>{data.seven}</td> 
					</tbody> 
					<tbody> 
						<td></td> 
						<td>25-29.9</td> 
						<td>{data.eight}</td> 
						<td>{data.nine}</td> 
					</tbody> 
					<tbody> 
						<td></td> 
						<td>30-34.9</td> 
						<td>{data.ten}</td> 
						<td>{data.eleven}</td> 
					</tbody> 
					<tbody> 
						<td></td> 
						<td>35-39.9</td> 
						<td>{data.twelve}</td> 
						<td>{data. threeten}</td> 
					</tbody> 
					<tbody> 
						<td></td> 
						<td>{data.fourteen}</td> 
						<td>{data.fifteen}</td> 
						<td>{data.sixteen}</td> 
					</tbody> 
				</table> 
				<Link to='/calculator'>
					<Button style={{marginTop: '10px',color:'white',fontWeight:'bolder',backgroundColor: '#d65443'}}>
						{data.seventeen}
					</Button>
				</Link>
			</div>
		</div>
	)
}
