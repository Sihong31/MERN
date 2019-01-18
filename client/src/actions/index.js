import axios from 'axios';
import actionTypes from './types';

const fetchUser = () => {
  axios.get('/api/current_user');
}