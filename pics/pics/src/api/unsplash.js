import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 9YxEwYqJhSdt-bAozxT1uaofp1eYvlEh_GGhEQzSyUA'
    }
});
