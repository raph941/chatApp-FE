import React, { useState } from 'react';
import { connect } from 'react-redux'
import '../styles/Signup.css';
import { Link } from 'react-router-dom'
import { signupUserAction } from '../Redux/actions/authActions'


const Signup = ({ signupUserAction }) => {
    const [ formState, setFormState ] = useState({username: '',password1: '',password2: ''})
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       console.log(formState)
    }

    return ( 
        <div className="signup">
            <div className="signup__box">
                <form onSubmit={handleSubmit}>
                    <div className="input__wrap">
                        <label>username:</label>
                        <input name="username" onChange={handleChange} type="text" placeholder="@cyber-dev"/>
                    </div>
                    <div className="input__wrap">
                        <label>Password:</label>
                        <input name="password1" onChange={handleChange} type="password" />
                    </div>
                    <div className="input__wrap">
                        <label>Confirm Password:</label>
                        <input name="password2" onChange={handleChange} type="password" />
                    </div>
                    <div className="input__wrap">
                        <button className="submit__btn" >signup</button>
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

// function mapStateToProps(store) {
//     return {
//         characters: store.characters.characters,
//         character: store.characters.currentCharracter,
//         showModal: store.characters.showModal,
//         fetching: store.characters.fetching,
//     }
// }

export default connect(null, { signupUserAction })(Signup)