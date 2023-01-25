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
  const { title, detail, category } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='post-form'>
      <div className='form-group'>
        <label htmlFor='postTitle'>Title</label>
        <input type='text' id='postTitle' value={title} placeholder='Title' />
      </div>
      <div className='form-group'>
        <label htmlFor='postDetail'>Detail</label>
        <textarea type='text' id='postDetail' value={detail} placeholder='Lorem Ipsum...' />
      </div>
      <div className='form-group'>
        <label htmlFor='postCategory'>Category</label>
        <select name='' id='postCategory' value={category}>
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
