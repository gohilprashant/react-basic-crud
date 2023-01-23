import { Link } from 'react-router-dom';
const PostCard = ({ post }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{post.title}</h5>
        <p className='card-text'>
          {post.body.substring(0, 155)}... <Link to={`/post/${post.id}`}>Read More</Link>
        </p>
      </div>
      <div className='card-category'>
        <span>Category: {post.category}</span>
      </div>
    </div>
  );
};

PostCard.prototype = {};

export default PostCard;
