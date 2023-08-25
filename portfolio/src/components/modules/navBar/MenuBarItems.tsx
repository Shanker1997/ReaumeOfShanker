import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuBarItems() {
    return (
        <div className='menuBarList'>

            <Link to={'/'}> HOME</Link>
            <Link to={'/secondComponet'}> EDUCATION</Link>
            <Link to={'/secondComponet/childcomp2'}> PROJECTS </Link>
            <Link to={'/secondComponet/childcomp2'}> WORKEXPERENCE </Link>
            <Link to={'/secondComponet/childcomp2'}> View Resume</Link>
        </div>
    )
}
