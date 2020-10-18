import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import '../styles/Signup.css';
import { Link, useLocation } from 'react-router-dom'
import { signupUserAction } from '../Redux/actions/authActions'
import { closeAlert } from '../Redux/actions/genericActions'
import { useFormik } from 'formik';
import { signupFormvalidate } from '../utils/formValidation'


const Signup = ({ signupUserAction, show_alert, alert_message, alert_level, showAlertAction, user, closeAlert }) => {
    const formik = useFormik({
        initialValues: {
          fullname: '',
          username: '',
          password1: '',
          password2: '',
        },
        validate: signupFormvalidate,

        onSubmit: values => {
          signupUserAction(values)
        },
    });

    let location = useLocation
    useEffect(()=> {
        closeAlert()
    }, [location])

    return ( 
        <div className="signup">
            <div className="signup__box">
                {/* { show_alert && <div className={`alert__${alert_level}`} >{ alert_message } <button onClick={() => closeAlert()} className="alert__dismiss">X</button></div> } */}
                <form onSubmit={formik.handleSubmit}>
                    <div className="input__wrap">
                        <label htmlFor="username">fullname:</label>
                        <input 
                            id="fullname"
                            name="fullname" 
                            onChange={formik.handleChange} 
                            value={formik.values.fullname}
                            type="text" 
                        />
                        { formik.errors.fullname ? <div className="error">{ formik.errors.fullname }</div> : null }
                    </div>
                    <div className="input__wrap">
                        <label htmlFor="username">username:</label>
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
                        <label htmlFor="password1" >Password:</label>
                        <input 
                            id="password1"
                            name="password1" 
                            onChange={formik.handleChange}
                            value={formik.values.password1} 
                            type="password" 
                        />
                        { formik.errors.password1 ? <div className="error">{ formik.errors.password1 }</div> : null }
                    </div>
                    <div className="input__wrap">
                        <label htmlFor="password1" >Confirm Password:</label>
                        <input 
                            id="password2"
                            name="password2" 
                            onChange={formik.handleChange}
                            value={formik.values.password2} 
                            type="password" 
                        />
                        { formik.errors.password2 ? <div className="error">{ formik.errors.password2 }</div> : null }
                    </div>
                    <div className="input__wrap">
                        <button type="submit" className="submit__btn" >signup</button>
                    </div>

                    <i> 
                        you have an account already?
                        <Link to="/login"> Login</Link>    
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
    }
}

export default connect(mapStateToProps, { signupUserAction, closeAlert })(Signup)