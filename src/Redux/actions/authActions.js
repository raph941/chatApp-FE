import { LOGIN_USER, LOGOUT_USER, FETCH_USER_DATA, SIGNUP_USER, UPDATE_USER } from './types';

export const signupUserAction = data => dispatch =>  {  
    console.log('we have reached the signup yaaay')

    dispatch ({
        type: SIGNUP_USER,
        payload: data
    })
}

// export const showConversationList = data => dispatch =>  {  
//     // data is boolean
//     dispatch ({
//         type: SHOW_CONVERSATION_LIST,
//         payload: data
//     })
// }

// export const conversationClicked = data => dispatch =>  {  
//     // data is boolean
//     dispatch ({
//         type: CONVERSATION_CLICKED,
//         payload: data
//     })
// }