import axios from 'axios'

const baseDomain = 'http://127.0.0.1:8000/api';
const baseURL = `${baseDomain}`;


export default axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})