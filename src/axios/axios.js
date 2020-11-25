import axios from 'axios';

const instance = axios.create({
    timeout: 50000,
    responseType: 'json',
});


export default instance

// export const baseURL = `${process.env.REACT_APP_API_PATH}`
// export const SOCKET_PATH = `${process.env.REACT_APP_SOCKET_PATH}`

export const baseURL = 'https://chatapp-be-api.herokuapp.com/'
export const SOCKET_PATH = 'wss://chatapp-be-api.herokuapp.com/chat/';