import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.131:3333' // colocar o mesmo ip que aparece no expo
});

export default api;