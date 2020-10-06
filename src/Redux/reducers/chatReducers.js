import { SEARCH_USER } from '../actions/types'
import { CLEAR_SEARCH } from '../actions/types'


let initialState = {
    conv_partners: {},
    searched_users: [],
    show_search_data: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_USER:
            return {
                ...state,
                searched_users: action.payload.searched_users,
                show_search_data: true
            }
        case CLEAR_SEARCH:
            return {
                ...state,
                show_search_data: false,
                seached_users: action.payload.searched_users,
            }
        default:
            return state
    }
}