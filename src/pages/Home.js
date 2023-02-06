import React from 'react';
import { toast } from 'react-toastify';
import PostCard from '../components/post/PostCard';
import { useGetPosts } from '../services/useGetPosts';

const Home = () => {
  const { data, isLoading, isError } = useGetPosts();

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (!isLoading && isError) {
    toast.error('Something went wrong please try again');
    return <h2>Home</h2>;
  }

  return (
    <div>
      <div className='card-row'>
        {data.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
