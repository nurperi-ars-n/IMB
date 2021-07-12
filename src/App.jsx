import React from 'react'
import HomePage from './components/HomePage/index.jsx'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.less'
import Calculator from './components/Calculator/index.jsx'
import Results from './components/Results/Result.jsx'

const App = () => (
	<div className='App'>
		<BrowserRouter>
			<Switch>
				<Route path='/calculator' component={Calculator} />
				<Route path='/results' component={Results} />
				<Route path='/' component={HomePage} />
			</Switch>
		</BrowserRouter>
	</div>
)
export default App
