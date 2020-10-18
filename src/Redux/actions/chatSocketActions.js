import WebSocketInstance from '../../socket/index'
import { SEND_NEW_MESSAGE, START_CHAT } from './types'


export const connectToSocketAction = () => dispatch => {
    WebSocketInstance.connect()
}

export const sendNewMessageAction = data => dispatch => {
    let _data = {type: SEND_NEW_MESSAGE, payload: data}
    console.log('am about to send')
    WebSocketInstance.send(_data)
}

// depricated
export const startChatAction = data => dispatch => {
    let _data = {type: START_CHAT, payload: data}
    WebSocketInstance.send(_data) 
}