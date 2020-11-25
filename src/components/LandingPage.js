import React from 'react';
import '../styles/Landing.css';
import ChatImage from '../images/talk3.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from 'react-router-dom'
import axios, { baseURL } from '../axios/axios'


const LandingPage = () => {
    useEffect(() => {
        // wakeup the Backend App because it takes 15s for heroku app to wakeup
        axios({
            method: 'get',
            url: `${baseURL}/`,
        })
    }, [])
    return ( 
        <div className="landing-page-container">
            <div className="landingPage">
                <div className="anime_chat_wrap">
                    <p className="anime_chat chat1">Hi Ade hw fa na</p>
                    <p className="anime_chat chat2 move__right">I Bam oo, how your side?</p><br/>
                    
                </div>
                <img src={ ChatImage } alt="landing_image"/>
            </div>

            <div className="landing__call">
                <h4>
                    Get Started today 
                    <span role="img" aria-labelledby="emoji">🚀🚀😎</span>  
                </h4>
                <span className="landing__call_btns">
                    <ArrowForwardIcon />
                    <Link className="call_anc" to="/login">CLICK HERE</Link>
                </span>
            </div>
        </div>
     );
}
 
export default LandingPage;