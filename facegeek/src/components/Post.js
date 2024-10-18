import React from 'react';
import './Post.css';

function Post({ user, content, time }) {
  return (
    <div className="post">
      <h3>{user}</h3>
      <p>{content}</p>
      <span>{time}</span>
    </div>
  );
}

export default Post;
