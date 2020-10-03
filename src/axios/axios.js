import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    responseType: 'json'
});


export default instance