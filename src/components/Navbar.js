import React, { useEffect } from 'react';
import '../styles/Navbar.css';
import Logo from '../images/avocado.png';
import { NavLink, Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux'
import { closeAlert } from '../Redux/actions/genericActions'
import { fetchUserAction, logoutAction } from '../Redux/actions/authActions'
import ProfileModal from '../components/modals/userProfileModal'
import { getInitials } from '../utils/genericUtils'



const Navbar = ({ show_alert, alert_message, alert_level, closeAlert, user, authenticated, fetchUserAction, logoutAction }) => {

    const handleInitials = () => {
        return getInitials(user?.fullname)
    }

    useEffect(() => {
        if(authenticated){
            fetchUserAction()
        }
    }, [])

    return ( 
        <div className="navbar">
            <div className="navbar__left">
                <Link to="/">
                    <img className="navbar__image" src={Logo} alt="logo" />
                </Link>
                
                <h5>Let's Talk.</h5>
            </div>

            {/* User profile modal */}
            < ProfileModal />

            <div className="navbar__right">
                { authenticated 
                ? 
                    <>
                    <p onClick={() => logoutAction()} className="nav-item-logout">Logout</p>
                        <Avatar >{ user.initials }</Avatar >   
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

function mapStateToProps(store) {
    return {
        show_alert: store.generic.show_alert,
        alert_message: store.generic.alert_message,
        alert_level: store.generic.alert_level,
        user: store.auth.user,
        authenticated: store.auth.is_auth, 
    }
}
 
export default connect(mapStateToProps, { closeAlert, fetchUserAction, logoutAction })(Navbar)