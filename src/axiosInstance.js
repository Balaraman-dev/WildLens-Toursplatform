import axios from 'axios';
import history from './history';
import config from './config';

const axiosInstance = axios.create({
    baseURL: config.API_URI,
    timeout: 1000,
});

axiosInstance.interceptors.request.use(
    config => {

        const token = localStorage.getItem('authToken');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem( 'authToken' );
            history.push("/auth");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
