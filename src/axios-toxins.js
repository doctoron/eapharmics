import React, {Component} from 'react';
import axios from 'axios';

import Toxics from './components/Toxics/Toxics';

const GetToxics = axios.create({
    baseURL: `https://eapharmics.firebaseio.com/`
});

export default GetToxics;