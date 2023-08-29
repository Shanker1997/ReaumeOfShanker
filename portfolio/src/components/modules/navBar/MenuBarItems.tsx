import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuBarItems() {
    return (
        <div className='menuBarList'>

            <NavLink to={'/'}> HOME</NavLink>
            <NavLink to={'/education'}> EDUCATION</NavLink>
            <NavLink to={'/projects'}> PROJECTS </NavLink>
            <NavLink to={'/workExperience'}> WORKEXPERENCE </NavLink>
            <NavLink to={'/Preview'}> View Resume</NavLink>
        </div>
    )
}
