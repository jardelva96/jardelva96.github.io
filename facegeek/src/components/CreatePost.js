import React, { useState } from 'react';
import './CreatePost.css';

function CreatePost({ onPost }) {
  const [input, setInput] = useState('');

  const handlePost = () => {
    if (input.trim()) {
      onPost(input);
      setInput('');
    }
  };

  return (
    <div className="createPost">
      <textarea
        placeholder="Share something interesting..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
}

export default CreatePost;
