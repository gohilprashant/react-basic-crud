import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PostForm from '../components/post/PostForm';
import usePostForm from '../hooks/usePostForm';
import { useAddPost } from '../services/useAddPost';

const AddPost = () => {
  const { formData, updateFormData, validate, errors, setErrors } = usePostForm({
    title: '',
    detail: '',
    category: 'Sports',
  });

  const { mutate: addNewPost, isLoading, isError, isSuccess } = useAddPost();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      addNewPost({ title: formData.title, body: formData.detail, category: formData.category });
    }
  };

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

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
