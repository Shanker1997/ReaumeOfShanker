import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { generapApis } from '../../../config/envi';

export default function MenuBarItems() {
    useEffect(() => {
        // fetch(generapApis.fetchjson).then((response: any) => console.log(response.json(), "7...."))
    })
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
