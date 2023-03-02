import { React } from 'react'
import { NavLink } from 'react-router-dom'

function Candy() {
	return (
		<div>
			<p>Hersheys, skittles, M&Ms and more!</p>
			<NavLink exact to='/'>
				Go Back
			</NavLink>
		</div>
	)
}

export default Candy
