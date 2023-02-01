import { categoriesData } from '../../utils/defaultValues';

const PostForm = ({ isLoading, formData, handleChange, handleSubmit, errors }) => {
  const { title, detail, category } = formData;
  return (
    <form onSubmit={handleSubmit} className='post-form'>
      {isLoading && <h2>Loading....</h2>}
      <div className='form-group'>
        <label htmlFor='postTitle'>Title</label>
        <input type='text' id='postTitle' name='title' value={title} onChange={handleChange} placeholder='Title' />
        {errors.title && <div className='invalid-error'>{errors.title}</div>}
      </div>
      <div className='form-group'>
        <label htmlFor='postDetail'>Detail</label>
        <textarea id='postDetail' name='detail' value={detail} onChange={handleChange} placeholder='Lorem Ipsum...' />
        {errors.detail && <div className='invalid-error'>{errors.detail}</div>}
      </div>
      <div className='form-group'>
        <label htmlFor='postCategory'>Category</label>
        <select name='category' id='postCategory' value={category} onChange={handleChange}>
          {/* loop through default categories and add options*/}
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

export default PostForm;
