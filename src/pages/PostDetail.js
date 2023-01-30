import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetPostById } from '../services/useGetPostById';

const PostDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetPostById(id);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (!isLoading && isError) {
    toast.error('Something went wrong please try again');
    return <Navigate to={'/'} />;
  }

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{data.title}</h5>
        <p className='card-text'>{data.body}</p>
      </div>
      <div className='card-category'>
        <span>Category: {data.category}</span>
      </div>
      <div className='card-actions'>
        <button className='btn btn-info'>Edit</button>
        <button className='btn btn-danger'>Delete</button>
      </div>
    </div>
  );
};

export default PostDetail;
