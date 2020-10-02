import React from 'react';
import '../styles/Signup.css';
import { Link } from 'react-router-dom'


const Signup = () => {
    return ( 
        <div className="signup">
            <div className="signup__box">
                <form>
                    <div className="input__wrap">
                        <label>username:</label>
                        <input type="text" placeholder="@cyber-dev"/>
                    </div>
                    <div className="input__wrap">
                        <label>Password:</label>
                        <input type="password" />
                    </div>
                    <div className="input__wrap">
                        <label>Confirm Password:</label>
                        <input type="password" />
                    </div>
                    <div className="input__wrap">
                        <button className="submit__btn">signup</button>
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
 
export default Signup;