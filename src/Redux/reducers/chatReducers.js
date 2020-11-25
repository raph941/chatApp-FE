import { SEARCH_USER, CLEAR_SEARCH, FETCH_CONVERSATION_PARTNERS, FETCH_CONVERSATION, ACTIVE_CONV_PARTNER, CLEAR_ACTIVE_CONV_MSGS, SET_ACTIVE_CHAT, ADD_NEW_MESSAGE, ADD_NEW_MESSAGE_INACTIVE } from '../actions/types'

let initialState = {
    conversation_partners: [],
    searched_users: [],
    show_search_data: false,
    is_active_conversation: false,
    active_conversation: [],
    active_conv_partner: {},
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
        case FETCH_CONVERSATION_PARTNERS:
            return {
                ...state,
                conversation_partners: action.payload.conversation_partners,
            }
        case FETCH_CONVERSATION:
            return {
                ...state,
                active_conversation: action.payload.active_conversation,
                is_active_conversation: true
            }
        case CLEAR_ACTIVE_CONV_MSGS:
            return {
                ...state,
                active_conversation: [],
            }
        case ACTIVE_CONV_PARTNER:
            return {
                ...state,
                active_conv_partner: action.payload
            }
        case SET_ACTIVE_CHAT:
            return {
                ...state,
                is_active_conversation: action.payload
            }
        case ADD_NEW_MESSAGE :
            // this if statement is here because there was always duplicate of a single message 
            // coming from the backend. so this would discard the duplicates by comparing the last message's
            // primary key and the incoming message's primary key
            if (state.active_conversation.length > 0){
                if (action.payload[0]['id'] === state.active_conversation[state.active_conversation.length -1]['id']){
                    console.log('THIS IS A DUPLICATE')
                    return { ...state }
                }
            }
            return { 
                ...state,
                active_conversation: state.active_conversation.concat(action.payload)
            }
        case ADD_NEW_MESSAGE_INACTIVE :
            return { 
                ...state,
                conversation_partners: action.payload
            }
        default:
            return state
    }
}