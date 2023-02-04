import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const updatePost = ({ id, postData }) => {
  console.log(id, postData);
  return axios.put(`/api/posts/${id}`, postData);
};

export const useUpdatePost = (id) => {
  const queryClient = useQueryClient();
  return useMutation(updatePost, {
    onSuccess: () => {
      // invalidate this post's query after post data is updated
      queryClient.invalidateQueries(['post', id]);
    },
  });
};
