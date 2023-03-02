import React from 'react'
import { NavLink } from 'react-router-dom'

function VendingNav() {
	return (
		<nav className='NavBar'>
			<NavLink exact to='/candy'>
				Candy
			</NavLink>
			<NavLink exact to='/chips'>
				Chips
			</NavLink>
			<NavLink exact to='/drinks'>
				Sports Drinks
			</NavLink>
		</nav>
	)
}

export default VendingNav
