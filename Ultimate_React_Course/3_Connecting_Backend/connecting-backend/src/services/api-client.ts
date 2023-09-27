import axios from 'axios';
import {AxiosError} from 'axios';

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export { AxiosError };