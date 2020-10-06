import { combineReducers } from 'redux'
import ChatAreaUiReducer from './chatAreaUiReducers'
import authReducer from './authReducer'
import genericReducers from './genericReducers'
import chatReducers from './chatReducers'

export default combineReducers({
    chatUi: ChatAreaUiReducer,
    auth: authReducer,
    generic: genericReducers,
    chat: chatReducers,
})