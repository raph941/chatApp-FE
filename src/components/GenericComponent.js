import React, { useEffect } from 'react';
import { closeAlert } from '../Redux/actions/genericActions'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import '../styles/GenericComponent.css'


const Generic = ({ show_alert, alert_message, alert_level, closeAlert, user, authenticated, fetchUserAction  }) => {
    let location = useLocation

    useEffect(()=> {
        closeAlert()
    }, [location])

    return ( 
        <div>
            {/* Alert */}
            <div className="alert__wrapper">
                { show_alert && <div className={`alert__${alert_level}`} >{ alert_message } <button onClick={() => closeAlert()} className="alert__dismiss">X</button></div> }
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

export default connect(mapStateToProps, { closeAlert })(Generic)
