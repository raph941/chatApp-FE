import { combineReducers } from 'redux'
import ChatAreaUiReducer from './chatAreaUiReducers'
import authReducer from './authReducer'
import genericReducers from './genericReducers'

export default combineReducers({
    chatUi: ChatAreaUiReducer,
    auth: authReducer,
    generic: genericReducers
})