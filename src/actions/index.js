import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './actionTypes';

export const saveComment = comment => {
  return({
    type: SAVE_COMMENT,
    payload: comment
  });
};

export const fetchComments = () => {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments');
  return({
    type: FETCH_COMMENTS,
    payload: response
  });
};

export const changeAuth = isLoggedIn => {
  return ({
    type: CHANGE_AUTH,
    payload: isLoggedIn
  });
};
