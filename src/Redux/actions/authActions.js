import { LOGIN_USER, IS_AUTH, UPDATE_USER, SHOW_ALERT, ALERT } from './types';
import Cookies from 'js-cookie'
import axios, { baseURL } from '../../axios/axios'


export const loginUserAction = data => dispatch =>  {  
    axios({
        method: 'post',
        url: `${baseURL}/user/login/`,
        data : data
    })

    .then((res) => res.data)
    .then((data) => {
        let token = data.token
        Cookies.set('token', token);
        delete data['token']
        dispatch ({ type: LOGIN_USER, payload: { user: data, is_auth: true } })
        window.location.reload()
        
    }).catch((err) => {
        console.log(err)
        dispatch ({ type: SHOW_ALERT, payload: true })
        dispatch ({ type: ALERT, payload: {alert_level:'danger', alert_message:'Incorrect credentials please try again, with the correct credentials'} })
        
    });
}


export const signupUserAction = data => dispatch =>  {  
    const _data = {
        'username': data.username,
        'fullname': data.fullname,
        'password': data.password1
    }

    axios({
        method: 'post',
        url: `${baseURL}/users/`,
        data: _data,
    })
    .then((response) => {
        dispatch ({ type: SHOW_ALERT, payload: true })
        dispatch ({ type: ALERT, payload: {alert_level:'success', alert_message:'your signup was succesful'} })
        const origin = window.location.origin
        window.location.href = `${origin}/login`;

    }).catch((err) => {
        console.log(err)
        dispatch ({ type: SHOW_ALERT, payload: true })
        dispatch ({ type: ALERT, payload: { alert_level: 'danger', alert_message: 'A user with thesame username already exists, please choose another username.' } })
    });
}

export const isAuth = data => dispatch => {
    const token = Cookies.get('token')
    const status = token?.length === 0 ? true : false
    dispatch({ type: IS_AUTH, payload: { is_ath: status } })
}


export const fetchUserAction = () => dispatch => {
    const token = Cookies.get('token')

    axios({
        method: 'get',
        url: `${baseURL}/user/me`,
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then((response) => response.data) 
    .then((data) => {
        dispatch({ type: UPDATE_USER, payload: { user: data } })
    }).catch((err) => {
        
    });
}


export const logoutAction = () => dispatch => {
    Cookies.remove('token')
    dispatch(
        { 
            type: UPDATE_USER, 
            payload: 
                { 
                    user: {},
                    is_auth: false 
                } 
        }
    )
    window.location.reload()
}

