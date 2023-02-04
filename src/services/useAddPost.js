import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const addPost = (postData) => {
  return axios.post('/api/posts', postData);
};

export const useAddPost = () => {
  const queryClient = useQueryClient();
  return useMutation(addPost, {
    onSuccess: () => {
      // invalidate posts queries after new post is added to get fresh data
      queryClient.invalidateQueries('posts');
    },
  });
};
