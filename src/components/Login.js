import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import '../styles/Login.css';
import { Link, useLocation, Redirect } from 'react-router-dom'
import { useFormik } from 'formik';
import { loginFormvalidate } from '../utils/formValidation'
import { loginUserAction } from '../Redux/actions/authActions'
import { closeAlert } from '../Redux/actions/genericActions'
import authReducer from '../Redux/reducers/authReducer';
import Cookies from 'js-cookie'


const Login = ({ loginUserAction, show_alert, alert_message, alert_level, closeAlert, user, authenticated }) => {
    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
        },
        validate: loginFormvalidate,

        onSubmit: values => {
          loginUserAction(values)
        },
    });

    let location = useLocation
    useEffect(()=> {
        closeAlert()
    }, [location])

    return ( 
        <div className="login">
            <div className="login__box">
                <form onSubmit={formik.handleSubmit}>
                    <div className="input__wrap">
                        <label>Username:</label>
                        <input 
                            id="username"
                            name="username" 
                            onChange={formik.handleChange} 
                            value={formik.values.username}
                            type="text" 
                        />
                        { formik.errors.username ? <div className="error">{ formik.errors.username }</div> : null }
                    </div>
                    <div className="input__wrap">
                        <label htmlFor="password" >Password</label>
                        <input 
                            id="password"
                            name="password" 
                            onChange={formik.handleChange}
                            value={formik.values.password} 
                            type="password" 
                        />
                        { formik.errors.password ? <div className="error">{ formik.errors.password }</div> : null }
                    </div>
                    <div className="input__wrap">
                        <button type="submit" className="submit__btn">login</button>
                    </div>

                    <i> 
                        Dont have an account yet? 
                        <Link to="/signup"> Signup</Link>   
                        { authenticated && <p>Hello i am authenticated</p> } 
                    </i>
                </form>
            </div>

            <div className="emoji__wrap">
                <span className="emoji1" role="img" aria-labelledby="emoji">😆</span>  
                <span className="emoji2" role="img" aria-labelledby="emoji">😘</span>  
                <span className="emoji3" role="img" aria-labelledby="emoji">😛</span>  
                <span className="emoji4" role="img" aria-labelledby="emoji">😁</span>  
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
 
export default connect(mapStateToProps, { loginUserAction, closeAlert })(Login)