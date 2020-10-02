import { SHOW_CONVERSATION, SHOW_CONVERSATION_LIST, CONVERSATION_CLICKED } from '../actions/types';

let initialState = {
    show_conversation: true,
    show_conversation_list: true,
    conversation_clicked: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_CONVERSATION:
            return {
                ...state,
                show_conversation: action.payload
            }
        case SHOW_CONVERSATION_LIST:
            return {
                ...state,
                show_conversation_list: action.payload
            }
        case CONVERSATION_CLICKED:
            return {
                ...state,
                show_conversation_list: action.payload
            }
        default:
            return state;
    }
}