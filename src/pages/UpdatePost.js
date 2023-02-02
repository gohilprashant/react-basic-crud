import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PostForm from '../components/post/PostForm';
import usePostForm from '../hooks/usePostForm';
import { useGetPostById } from '../services/useGetPostById';

const UpdatePost = () => {
  const { id } = useParams();
  const { data: curPost, isLoading: curPostIsLoading, isError: curPostIsError } = useGetPostById(id);

  const { formData, setFormData, updateFormData, validate, errors, setErrors } = usePostForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      if (
        formData.title === curPost.title &&
        formData.detail === curPost.body &&
        formData.category === curPost.category
      ) {
        toast.error(`You haven't updated anything in this post`);
      }
    }
  };

  useEffect(() => {
    if (!curPostIsLoading && curPost) {
      setFormData({
        title: curPost.title,
        detail: curPost.body,
        category: curPost.category,
      });
    }
  }, [curPost, curPostIsLoading, setFormData]);

  if (curPostIsLoading) {
    return <h2>Loading....</h2>;
  }

  if (!curPostIsLoading && curPostIsError) {
    toast.error('Something went wrong please try again');
    return;
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
