import axios from 'axios';
import { useMutation } from 'react-query';

const addPost = (postData) => {
  return axios.post('/api/posts', postData);
};

export const useAddPost = (postData) => {
  return useMutation(addPost);
};
