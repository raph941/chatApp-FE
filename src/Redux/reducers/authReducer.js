import { LOGIN_USER, LOGOUT_USER, FETCH_USER_DATA, SIGNUP_USER, UPDATE_USER } from '../actions/types'

let initialState = {
    user: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: action.payload
            }
        case FETCH_USER_DATA:
            return {
                ...state,
                user: action.payload
            }
        case SIGNUP_USER:
            return {
                ...state,
                user: action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}