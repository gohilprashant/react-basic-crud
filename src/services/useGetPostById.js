import { useQuery } from 'react-query';
import axios from 'axios';

const getPostById = (id) => {
  return axios.get(`/api/posts/${id}`);
};

export const useGetPostById = (id) => useQuery(['post', id], () => getPostById(id), { select: (data) => data.data });
