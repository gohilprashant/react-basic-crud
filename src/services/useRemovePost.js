import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const removePost = (id) => {
  return axios.delete(`/api/posts/${id}`);
};

export const useRemovePost = () => {
  const queryClient = useQueryClient();
  return useMutation(removePost, {
    onSuccess: () => {
      // invalidate posts queries after a post is removed to get fresh data
      queryClient.invalidateQueries('posts');
    },
  });
};
