import React from 'react'
import './NavStyles.scss'
import portfolioLogo from '../../../Assets/profile.png'
import MenuBarItems from './MenuBarItems'
import Avatar from '@mui/material/Avatar';
import Profilepic from '../../../Assets/profilepic.jpg'


const Navbar = () => {
    return (
        <div className='navBarContainer'>
            <div className='logoContainer'>
                <img src={portfolioLogo} alt="portfoliologo" />
                <div className='headerTitle'><p>PORTFOLIO</p></div>
            </div>

            <MenuBarItems />
            <div className='ProfileContainer' title='Gourishanker Profile'>
                <div className='profilepic'>
                    <Avatar alt="Remy Sharp" src={Profilepic} title={"Gourishanker"} />
                </div>
                <div className='UserName'>
                    <p> Gouri Shanker</p>
                </div>

            </div>



        </div>
    )
}
export default Navbar
