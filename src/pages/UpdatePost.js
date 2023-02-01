import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PostForm from '../components/post/PostForm';
import { useGetPostById } from '../services/useGetPostById';

const UpdatePost = () => {
  const { id } = useParams();

  const { data: curPost, isLoading: curPostIsLoading, isError: curPostIsError } = useGetPostById(id);

  const [formData, setFormData] = useState({ title: curPost.title, detail: curPost.body, category: curPost.category });
  const [errors, setErrors] = useState({});
  const { title, detail, category } = formData;

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errObj = {};
    if (!title || !title.trim()) {
      errObj.title = 'Title is required';
    } else if (title.length < 3) {
      errObj.title = 'Title must be at least 3 characters long';
    }

    if (!detail || !detail.trim()) {
      errObj.detail = 'Detail is required';
    } else if (detail.length < 20) {
      errObj.detail = 'Detail must be at least 40 characters long';
    }
    return errObj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
    }
  };

  if (curPostIsLoading) {
    return <h2>Loading...</h2>;
  }

  if (!curPostIsLoading && curPostIsError) {
    toast.error('Something went wrong please try again');
  }

  return (
    <PostForm
      isLoading={curPostIsLoading}
      formData={formData}
      handleChange={updateFormData}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default UpdatePost;
