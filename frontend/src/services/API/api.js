import axios from 'axios';

const API = axios.create({
    baseURL: 'http://api.example.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default API;
