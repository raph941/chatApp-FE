import { FETCH_USER_CONVERSATIONS } from './types';

export const showConversation = data => dispatch =>  {  
    
    
    
    dispatch ({
        type: SHOW_CONVERSATION,
        payload: data
    })
}