import axios from 'axios'
import config from '../config/config'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.timeout = 10000; //10s
axios.defaults.baseURL = config.apiUrl
axios.interceptors.request.use(function (config) {

    let auth = null;

    config.headers = {
        ...config.headers,
        'Authorization': auth ? `Bearer ${auth.access_token}` : null
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axios;