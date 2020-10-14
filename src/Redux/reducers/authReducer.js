import Cookies from 'js-cookie'
import { LOGIN_USER, LOGOUT_USER, FETCH_USER_DATA, SIGNUP_USER, UPDATE_USER, IS_AUTH } from '../actions/types'

let token = Cookies.get('token')
let my_auth_stat = token?.length === undefined ? false : true


let initialState = {
    user: {},
    is_auth: my_auth_stat,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.user,
                is_auth: action.payload.is_auth
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: action.payload.user, is_auth: action.payload.is_auth
            }
        case FETCH_USER_DATA:
            return {
                ...state,
            }
        case SIGNUP_USER:
            return {
                ...state,
                user: action.payload.user
            }
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload.user
            }
        case IS_AUTH:
            return {
                is_auth: action.payload.is_auth
            }
        default:
            return state;
    }
}