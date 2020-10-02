import { combineReducers } from 'redux'
import ChatAreaUiReducer from './chatAreaUiReducers'

export default combineReducers({
    chatUi: ChatAreaUiReducer
})