import React from 'react';
import { toast } from 'react-toastify';
import PostCard from '../components/post/PostCard';
import { useGetPosts } from '../services/useGetPosts';

const post = {
  id: '5903abf4-c73b-4758-a3ef-f255b8aa7f0f',
  title: 'Asperiores quisquam accusantium ab porro earum optio magni veritatis animi.',
  body: 'Ut laborum expedita. Inventore non enim sed animi eius quo mollitia voluptatem consequuntur. Asperiores fugiat non.\nAliquam quia alias placeat. Esse sequi iure odio porro ab at. Omnis modi omnis alias vitae optio dolore asperiores modi. Ipsa qui sapiente vel eius. Sequi deserunt impedit.\nMagni corrupti impedit molestiae facilis. Sapiente corporis occaecati excepturi nam odio. Ullam unde est.',
  category: 'Outdoors',
};

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
