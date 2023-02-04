import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PostForm from '../components/post/PostForm';
import usePostForm from '../hooks/usePostForm';
import { useGetPostById } from '../services/useGetPostById';
import { useUpdatePost } from '../services/useUpdatePost';

const UpdatePost = () => {
  const { id } = useParams();
  const { data: curPost, isLoading: curPostIsLoading, isError: curPostIsError } = useGetPostById(id);
  const {
    mutate: updateCurPost,
    isLoading: updatePostIsLoading,
    isError: updatePostIsError,
    isSuccess: updatePostIsSuccess,
  } = useUpdatePost(id);

  const { formData, setFormData, updateFormData, validate, errors, setErrors } = usePostForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const { title, detail: body, category } = formData;
      if (title === curPost.title && body === curPost.body && category === curPost.category) {
        toast.error(`You haven't updated anything in this post`);
      } else {
        updateCurPost({ id, postData: { title, body, category } });
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

  if ((curPostIsLoading, updatePostIsLoading)) {
    return <h2>Loading....</h2>;
  }

  if (!curPostIsLoading && curPostIsError) {
    toast.error('Something went wrong please try again');
    return <Navigate to={`/posts/${id}`} />;
  }

  if (!updatePostIsLoading && updatePostIsError) {
    toast.error('Something went wrong please try again');
  }

  if (updatePostIsSuccess) {
    toast.success('Post added successfully!');
    return <Navigate to={`/posts/${id}`} />;
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
