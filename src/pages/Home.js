import React from 'react';
import PostCard from '../components/post/PostCard';

const post = {
  id: '5903abf4-c73b-4758-a3ef-f255b8aa7f0f',
  title: 'Asperiores quisquam accusantium ab porro earum optio magni veritatis animi.',
  body: 'Ut laborum expedita. Inventore non enim sed animi eius quo mollitia voluptatem consequuntur. Asperiores fugiat non.\nAliquam quia alias placeat. Esse sequi iure odio porro ab at. Omnis modi omnis alias vitae optio dolore asperiores modi. Ipsa qui sapiente vel eius. Sequi deserunt impedit.\nMagni corrupti impedit molestiae facilis. Sapiente corporis occaecati excepturi nam odio. Ullam unde est.',
  category: 'Outdoors',
};

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <div className='card-row'>
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
      </div>
    </div>
  );
};

export default Home;
