import { React } from 'react'
import { NavLink } from 'react-router-dom'

function Chips() {
	return (
		<div>
			<p>All of the chips you could imagine</p>
			<NavLink exact to='/'>
				Go Back
			</NavLink>
		</div>
	)
}

export default Chips
