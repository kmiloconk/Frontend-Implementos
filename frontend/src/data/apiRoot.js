import axios from 'axios';

const URL = 'http://localhost:3001/api'

export default axios.create({
    baseURL: URL,
});
