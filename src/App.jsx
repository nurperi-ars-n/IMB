import React from 'react'
import HomePage from './components/HomePage/index.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.less'
import Calculator from './components/Calculator/index.jsx'

const App = () => (
	<div className='App'>
		<h1>IMT Calculator</h1>
		<Router>
			<Switch>
				<Route path='/calculator'>
					<Calculator />
				</Route>
				<Route path='/'>
					<HomePage />
				</Route>
			</Switch>
		</Router>
	</div>
)
export default App
