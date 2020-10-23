import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://chatapp-be-api.herokuapp.com/',
    timeout: 50000,
    responseType: 'json',
});


export default instance

// export const baseURL = 'https://chatapp-be-api.herokuapp.com/'
export const baseURL = 'http://127.0.0.1:8000'


export const API_PATH = 'ws://localhost:8000/chat/';
// export const API_PATH = 'wss://chatapp-be-api.herokuapp.com/chat/';