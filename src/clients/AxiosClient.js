import axios from 'axios'

const baseDomain = 'http://127.0.0.1:8000';
const baseURL = `${baseDomain}`;


export default axios.create({
    url: baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})