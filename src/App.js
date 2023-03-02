import { BrowserRouter, Route } from 'react-router-dom'
import VendingMachine from './components/VendingMachine'
import Candy from './components/Candy'
import Chips from './components/Chips'
import SportsDrink from './components/SportsDrink'
import './App.css'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Route exact path='/'>
					<VendingMachine />
				</Route>
				<Route exact path='/candy'>
					<Candy />
				</Route>
				<Route exact path='/chips'>
					<Chips />
				</Route>
				<Route exact path='/drinks'>
					<SportsDrink />
				</Route>
			</BrowserRouter>
		</div>
	)
}

export default App
