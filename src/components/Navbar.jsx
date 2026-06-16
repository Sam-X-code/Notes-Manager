import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex place-content-start place-items-center gap-2 pl-2 h-8  text-black bg-amber-300 ">
      <NavLink to="/">
        Home
      </NavLink>

      <NavLink to="/pastes">
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
