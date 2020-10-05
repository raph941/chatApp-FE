import { LOGIN_USER, LOGOUT_USER, FETCH_USER_DATA, SIGNUP_USER, IS_AUTH, UPDATE_USER, SHOW_ALERT, ALERT } from './types';
import { alertAction, showAlertAction } from './genericActions'
import Cookies from 'js-cookie'
import axios from '../../axios/axios'

const baseUrl = 'http://127.0.0.1:8000'

export const loginUserAction = data => dispatch =>  {  

    axios({
        method: 'post',
        url: `${baseUrl}/user/login`,
        data: data,
    })
    .then((res) => res.data)
    .then((data) => {
        let token = data.token
        delete data['token']
        Cookies.set('token', token);
        dispatch ({ type: LOGIN_USER, payload: { user: data, is_auth: true } })
        
    }).catch((err) => {
        // console.log(err)
        // console.log('an error occured here')
        dispatch ({ type: SHOW_ALERT, payload: true })
        dispatch ({ type: ALERT, payload: {alert_level:'danger', alert_message:'Incorrect credentials please try again, with the correct credentials'} })
        
    });
}


export const signupUserAction = data => dispatch =>  {  
    const _data = {
        'username': data.username,
        'password': data.password1
    }

    axios({
        method: 'post',
        url: `${baseUrl}/users/`,
        data: _data,
    })
    .then((response) => {
        console.log(response)

        dispatch ({ type: SHOW_ALERT, payload: true })
        dispatch ({ type: ALERT, payload: {alert_level:'success', alert_message:'your signup was succesful'} })

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
    console.log('i have been summoned')

    axios({
        method: 'get',
        url: `${baseUrl}/user/1`,
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