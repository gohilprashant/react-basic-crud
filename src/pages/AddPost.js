import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PostForm from '../components/post/PostForm';
import { useAddPost } from '../services/useAddPost';

const AddPost = () => {
  const [formData, setFormData] = useState({ title: '', detail: '', category: 'Sports' });
  const [errors, setErrors] = useState({});
  const { title, detail, category } = formData;

  const { mutate: addNewPost, isLoading, isError, isSuccess } = useAddPost();

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
      addNewPost({ title, body: detail, category });
    }
  };

  if (!isLoading && isError) {
    toast.error('Something went wrong please try again');
  }

  if (isSuccess) {
    toast.success('Post added successfully!');
    return <Navigate to={'/'} />;
  }

  return (
    <PostForm
      isLoading={isLoading}
      formData={formData}
      handleChange={updateFormData}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default AddPost;
