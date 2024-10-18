import React, { useState } from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
import './Feed.css';

function Feed() {
  const [posts, setPosts] = useState([
    {
      user: 'John Dev',
      content: 'Check out my new React project!',
      time: '2 hours ago',
    },
    {
      user: 'Jane Coder',
      content: 'Does anyone have resources on learning Rust?',
      time: '5 hours ago',
    },
  ]);

  const addPost = (content) => {
    const newPost = {
      user: 'Jardel Alves',
      content,
      time: 'Just now',
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="feed">
      <CreatePost onPost={addPost} />
      {posts.map((post, index) => (
        <Post key={index} user={post.user} content={post.content} time={post.time} />
      ))}
    </div>
  );
}

export default Feed;
