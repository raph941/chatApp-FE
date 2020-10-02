import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom'


const Login = () => {
    return ( 
        <div className="login">
            <div className="login__box">
                <form>
                    <div className="input__wrap">
                        <label>Username:</label>
                        <input type="text" placeholder="@cyber-dev"/>
                    </div>
                    <div className="input__wrap">
                        <label>Password:</label>
                        <input type="password" />
                    </div>
                    <div className="input__wrap">
                        <button className="submit__btn">login</button>
                    </div>

                    <i> 
                        Dont have an account yet? 
                        <Link to="/signup"> Signup</Link>    
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
 
export default Login;