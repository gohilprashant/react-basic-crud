import { useState } from 'react';

const categoriesData = [
  { key: 'Sports', value: 'Sports' },
  { key: 'Grocery', value: 'Grocery' },
  { key: 'Automotive', value: 'Automotive' },
  { key: 'Music', value: 'Music' },
  { key: 'Tools', value: 'Tools' },
];

const AddPost = () => {
  const [formData, setFormData] = useState({ title: '', detail: '', category: 'Sports' });
  const [errors, setErrors] = useState({});
  const { title, detail, category } = formData;

  const updateFormData = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errObj = {};
    if (!title.trim()) {
      errObj.title = 'Title is required';
    } else if (title.length < 3) {
      errObj.title = 'Title must be at least 3 characters long';
    }

    if (!detail.trim()) {
      errObj.detail = 'Detail is required';
    } else if (detail.length < 20) {
      errObj.detail = 'Detail must be at least 40 characters long';
    }
    return errObj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='post-form'>
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
      <button type='submit' className='btn-primary'>
        Submit Form
      </button>
    </form>
  );
};

export default AddPost;
