import React, { useEffect, useState } from 'react'
import './Results.less'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from "react-redux"

import { RU,EN } from "../../store/actions/auth";
import {switch_language} from '../../store/actions/auth'
import LanguageIcon from '@material-ui/icons/Language';


export default function Results() {

     const state = useSelector((state)=> state.index)
	 const data = useSelector(state => state.auth.data)

	 const dispatch = useDispatch()

	 return(
		<div className='results'>
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
			<div className='block-result'>
		     	<h1 style={{color:"black"}}>{data.results}</h1>
				<div className="detals">
					<span>{data.weightOne}:{state.weight}</span>
					<span>{data.heightOne}:{state.height}</span>
					<span>{data.ageOne}:{state.age}</span>
					<span>{data.pol}: {state.pol === true ? data.gender: data.man }</span>
				</div>
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
						{data.buttons}
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
				       {data.exit}
					</Button>
				</Link>
			</div>
		</div>
	)
}
