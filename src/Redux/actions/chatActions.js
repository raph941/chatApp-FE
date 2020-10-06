import { SEARCH_USER, CLEAR_SEARCH } from './types'
import Cookies from 'js-cookie'
import axios from '../../axios/axios'

const baseUrl = 'http://127.0.0.1:8000'
const token = Cookies.get('token')


export const searchUsers = data => dispatch =>  {  
    axios.get(`${baseUrl}/users/search/`, {
        params: {
            'query':data
        },
        headers: {
            'Authorization': `Token ${token}`
        },
    })
    .then((response) => response.data)
    .then((data) => {
        console.log(data)
        dispatch ({ type: SEARCH_USER, payload: { searched_users: data, show_search_data: true } })
    }).catch((err) => {
        console.log(err)
    });
}


export const clearSearch = () => dispatch =>  {  

    dispatch ({ 
        type: CLEAR_SEARCH, 
        payload: { 
            searched_data: {}, 
        } 
    })
}