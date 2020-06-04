import axios from 'axios';

const KEY = 'AIzaSyA4trt5ER-AznZiEsi4ffUD36VLqkisPbM';
export const baseParams = {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
}

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: baseParams
});