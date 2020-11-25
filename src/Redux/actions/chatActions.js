import { SEARCH_USER, CLEAR_SEARCH, FETCH_CONVERSATION_PARTNERS, FETCH_CONVERSATION , CLEAR_ACTIVE_CONV_MSGS, ACTIVE_CONV_PARTNER, SET_ACTIVE_CHAT, ADD_NEW_MESSAGE, ADD_NEW_MESSAGE_INACTIVE} from './types'
import Cookies from 'js-cookie'
import axios, { baseURL } from '../../axios/axios'
import store from '../store'
import { cloneDeep } from "lodash"
import { moveArrayItemToNewIndex } from '../../utils/genericUtils'

const token = Cookies.get('token')

export const searchUsers = query => dispatch =>  {  
    // gets a list of users givern an input search parameter
    axios.get(`${baseURL}/users/search/?username=${query}`, {
        // params: {
        //     'query':data
        // },
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
    axios.get(`${baseURL}/conversation/partners`, {
        headers: {
            'Authorization': `Token ${token}`
        },
    })
    .then((response) => response.data)
    .then((data) => {
        let sortedData = data.sort(function(a, b){
            var dateA=new Date(a.lastmsg_date), dateB=new Date(b.lastmsg_date)
            return dateB-dateA //sort by date ascending
        })

        dispatch ({ type: FETCH_CONVERSATION_PARTNERS, payload: { conversation_partners: sortedData } })
    }).catch((err) => {
        console.log(err)
    });
}


export const fetchConvMessages = data => dispatch =>  {  
    // gets a lists of users i have had a conversation with
    dispatch ({ type: CLEAR_ACTIVE_CONV_MSGS })
    dispatch ({ type: ACTIVE_CONV_PARTNER, payload: data })
    axios.get(`${baseURL}/conversation/messages/${data.id}`, {
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
    console.log(data)
    dispatch ({
        type: ADD_NEW_MESSAGE,
        payload: data
    })
}

export const addNoneActiveNewMessage = message => dispatch => {
    const convPartners = store.getState().chat.conversation_partners
    let convPartnersCopy = cloneDeep(convPartners) //Note i used deep copy, to ensure that the nested objects are copied as well
    for (let i in convPartnersCopy){
        if ( convPartnersCopy[i].username === message.sender.username ){
            convPartnersCopy[i].lastmsg = message.content
            convPartnersCopy[i].unread_count ++ 
            convPartnersCopy[i].lastmsg_date = message.sent_at
            break; // If you want to break out of the loop once you've found a match
        }
    }

    dispatch ({
        type: ADD_NEW_MESSAGE_INACTIVE,
        payload: convPartnersCopy
    })
}

export const clickSearchedUser = data => dispatch => {
    const convPartners = store.getState().chat.conversation_partners
    let userExists = false
    let convPartnersUpdated = []

    for (let i in convPartners){
        if ( convPartners[i].username === data.username ){
            userExists = true
            convPartnersUpdated = moveArrayItemToNewIndex(convPartners, i, 0)
            break; // If you want to break out of the loop once you've found a match
        }
    }
    
    if ( !userExists ){
        convPartnersUpdated = [data, ...convPartners]
    }

    dispatch ({ 
        type: FETCH_CONVERSATION_PARTNERS, 
        payload: { 
            conversation_partners: convPartnersUpdated, 
        } 
    })
    store.dispatch(fetchConvMessages(data))
    dispatch({ type: SET_ACTIVE_CHAT, payload: true })
    
}