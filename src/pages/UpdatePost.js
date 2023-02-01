import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PostForm from '../components/post/PostForm';
import usePostForm from '../hooks/usePostForm';
import { useGetPostById } from '../services/useGetPostById';

const UpdatePost = () => {
  const { id } = useParams();

  const { data: curPost, isLoading: curPostIsLoading, isError: curPostIsError } = useGetPostById(id);

  const { formData, updateFormData, validate, errors, setErrors } = usePostForm({
    title: curPost.title,
    detail: curPost.body,
    category: curPost.category,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
    }
  };

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
