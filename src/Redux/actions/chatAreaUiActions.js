import { SHOW_CONVERSATION, SHOW_CONVERSATION_LIST, CONVERSATION_CLICKED } from './types';

export const showConversation = data => dispatch =>  {  
    // data is boolean
    dispatch ({
        type: SHOW_CONVERSATION,
        payload: data
    })
}

export const showConversationList = data => dispatch =>  {  
    // data is boolean
    dispatch ({
        type: SHOW_CONVERSATION_LIST,
        payload: data
    })
}

export const conversationClicked = data => dispatch =>  {  
    // data is boolean
    dispatch ({
        type: CONVERSATION_CLICKED,
        payload: data
    })
}