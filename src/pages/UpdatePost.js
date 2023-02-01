import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAddPost } from '../services/useAddPost';
import { useGetPostById } from '../services/useGetPostById';

const categoriesData = [
  { key: 'Sports', value: 'Sports' },
  { key: 'Grocery', value: 'Grocery' },
  { key: 'Automotive', value: 'Automotive' },
  { key: 'Music', value: 'Music' },
  { key: 'Tools', value: 'Tools' },
  { key: 'Shoes', value: 'Shoes' },
  { key: 'Beauty', value: 'Beauty' },
  { key: 'Movies', value: 'Movies' },
  { key: 'Kids', value: 'Kids' },
  { key: 'Electronics', value: 'Electronics' },
  { key: 'Games', value: 'Games' },
  { key: 'Clothing', value: 'Clothing' },
];

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
    <form onSubmit={handleSubmit} className='post-form'>
      {curPostIsLoading && <h2>Loading....</h2>}
      <div className='form-group'>
        <label htmlFor='postTitle'>Title</label>
        <input type='text' id='postTitle' name='title' value={title} onChange={updateFormData} placeholder='Title' />
        {errors.title && <div className='invalid-error'>{errors.title}</div>}
      </div>
      <div className='form-group'>
        <label htmlFor='postDetail'>Detail</label>
        <textarea id='postDetail' name='detail' value={detail} onChange={updateFormData} placeholder='Lorem Ipsum...' />
        {errors.detail && <div className='invalid-error'>{errors.detail}</div>}
      </div>
      <div className='form-group'>
        <label htmlFor='postCategory'>Category</label>
        <select name='category' id='postCategory' value={category} onChange={updateFormData}>
          {categoriesData.map((c) => (
            <option value={c.key} key={c.key}>
              {c.value}
            </option>
          ))}
        </select>
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit Form
      </button>
    </form>
  );
};

export default UpdatePost;
