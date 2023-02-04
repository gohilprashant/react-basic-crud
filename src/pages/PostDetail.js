import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetPostById } from '../services/useGetPostById';
import { useRemovePost } from '../services/useRemovePost';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetPostById(id);
  const {
    mutate: removePost,
    isLoading: removePostIsLoading,
    isError: removePostIsError,
    isSuccess: removePostIsSuccess,
  } = useRemovePost();

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (!removePostIsLoading && removePostIsError) {
    toast.error('Something went wrong please try again');
  }

  if (removePostIsSuccess) {
    toast.success('Post Removed!');
    return <Navigate to={'/'} />;
  }

  const handleUpdate = () => {
    navigate(`/posts/update/${id}`);
  };

  const handleRemove = () => {
    removePost(id);
  };

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
        <button className='btn btn-info' onClick={handleUpdate}>
          Edit
        </button>
        <button className='btn btn-danger' onClick={handleRemove}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
