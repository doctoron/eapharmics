import axios from 'axios';

const toxics = axios.create({
    baseURL: 'https://eapharmics.firebaseio.com/'
});

export default toxics;