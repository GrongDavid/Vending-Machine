import { React } from 'react'
import { NavLink } from 'react-router-dom'

function SportsDrink() {
	return (
		<div>
			<p>Gatorade, Powerade, and drinks galore</p>
			<NavLink exact to='/'>
				Go Back
			</NavLink>
		</div>
	)
}

export default SportsDrink
