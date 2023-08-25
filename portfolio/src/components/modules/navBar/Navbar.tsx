import React from 'react'
import './NavStyles.scss'
import portfolioLogo from '../../../Assets/profile.png'
import MenuBarItems from './MenuBarItems'

const Navbar = () => {
    return (
        <div className='navBarContainer'>
            <div className='logoContainer'>
                <img src={portfolioLogo} alt="portfoliologo" />
                <div className='headerTitle'><p>PORTFOLIO</p></div>
            </div>

            <MenuBarItems />
            <div className='logoContainer'>
                <img src={portfolioLogo} alt="portfoliologo" />
                <div className='headerTitle'><p>PORTFOLIO</p></div>
            </div>



        </div>
    )
}
export default Navbar
