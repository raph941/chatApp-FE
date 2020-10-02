import React, { useState } from 'react';
import '../styles/Navbar.css';
import Logo from '../images/avocado.png';
import { NavLink, Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';


const Navbar = () => {
    const [auth, setAuth] = useState(true)

    return ( 
        <div className="navbar">
            <div className="navbar__left">
                <Link to="/">
                    <img className="navbar__image" src={Logo} alt="logo" />
                </Link>
                
                <h5>Let's Talk.</h5>
            </div>

            <div className="navbar__right d-none">
                { auth 
                ? 
                    <>
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_E0QeWyWCVvgqWJYxehJcs7uyerWLjHjy_uppw=s32-c-mo" />   
                    {/* <Link to="/chat" className="nav-item">Chat</Link> */}
                    </>
                :
                    <>
                    <NavLink exact activeClassName="active-nav" className="nav-item" to="/login"> Login </NavLink>
                    <NavLink exact activeClassName="active-nav" className="nav-item" to="/signup"> Signup </NavLink>
                    </>
                }
            </div>
        </div>
     );
}
 
export default Navbar;