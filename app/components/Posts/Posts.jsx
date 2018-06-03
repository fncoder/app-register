import React from 'react';

const Posts = ({ items }) => {
  const listPosts = items.map((value, index) => (
    <div key={index} className={`post post ${index + 1}`}>
      <p className="post-author">{value.name}</p>
      <p className="post-date">{value.date}</p>
      <p className="post-message">{value.text}</p>
    </div>
  ));
  return (
    <div className="posts">
      <div className="wrapper-posts">
        {listPosts}
      </div>
    </div>
  );
};

export default Posts;
