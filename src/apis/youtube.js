import axios from 'axios';

const KEY = 'AIzaSyCGKnOCzYNJGACO-M9HifWx2Jj7e7VvSW8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', //from com.developers.console
    params: {
       part: 'snippet',
       type: 'video',
       maxResults: 5,
       key: KEY
    }
});