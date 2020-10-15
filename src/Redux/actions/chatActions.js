import { SEARCH_USER, CLEAR_SEARCH, FETCH_CONVERSATION_PARTNERS, FETCH_CONVERSATION , CLEAR_ACTIVE_CONV_MSGS, ACTIVE_CONV_PARTNER, SET_ACTIVE_CHAT, ADD_NEW_MESSAGE} from './types'
import Cookies from 'js-cookie'
import axios from '../../axios/axios'
import store from '../store'

const baseUrl = 'https://chatapp-be-api.herokuapp.com'
// const baseUrl = 'http://127.0.0.1:8000'
const token = Cookies.get('token')


export const searchUsers = data => dispatch =>  {  
    // gets a list of users givern an input search parameter
    axios.get(`${baseUrl}/users/search`, {
        params: {
            'query':data
        },
        headers: {
            'Authorization': `Token ${token}`
        },
    })
    .then((response) => response.data)
    .then((data) => {
        dispatch ({ type: SEARCH_USER, payload: { searched_users: data, show_search_data: true } })
    }).catch((err) => {
        console.log(err)
    });
}


export const clearSearch = () => dispatch =>  {  
    // removes all users that has bee added to the searched_users state
    dispatch ({ 
        type: CLEAR_SEARCH, 
        payload: { 
            searched_data: {}, 
        } 
    })
}


export const fetchMyConversationPartners = () => dispatch =>  {  
    // gets a lists of users i have had a conversation with
    axios.get(`${baseUrl}/conversation/partners`, {
        headers: {
            'Authorization': `Token ${token}`
        },
    })
    .then((response) => response.data)
    .then((data) => {
        console.log(data)
        dispatch ({ type: FETCH_CONVERSATION_PARTNERS, payload: { conversation_partners: data } })
    }).catch((err) => {
        console.log(err)
    });
}


export const fetchConvMessages = data => dispatch =>  {  
    // gets a lists of users i have had a conversation with
    dispatch ({ type: CLEAR_ACTIVE_CONV_MSGS })
    dispatch ({ type: ACTIVE_CONV_PARTNER, payload: data })
    axios.get(`${baseUrl}/conversation/messages/${data.id}`, {
        headers: {
            'Authorization': `Token ${token}`
        },
    })
    .then((response) => response.data)
    .then((data) => {
        dispatch ({ type: FETCH_CONVERSATION, payload: { active_conversation: data } })
    }).catch((err) => {
        console.log(err)
    });
}


export const setActiveChat = data => dispatch => {
    dispatch ({
        type: SET_ACTIVE_CHAT,
        payload: data
    })
}

export const addNewMessage = data => dispatch => {  
    console.log('action dispatched ')  
    dispatch ({
        type: ADD_NEW_MESSAGE,
        payload: data
    })
}