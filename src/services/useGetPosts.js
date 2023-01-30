import { useQuery } from 'react-query';
import axios from 'axios';

const getPosts = () => {
  return axios.get('/api/posts');
};

export const useGetPosts = () =>
  useQuery('posts', getPosts, {
    select: (data) => data.data,
  });
