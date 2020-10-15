import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://chatapp-be-api.herokuapp.com/',
    timeout: 50000,
    responseType: 'json',
});


export default instance