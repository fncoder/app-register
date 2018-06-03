import React from 'react';
import CommentForm from 'containers/CommentForm';
import Posts from 'containers/Posts';

const Home = () => (
  <section className="home">
    <div className="wrapper wrapper--home">
      <Posts />
      <CommentForm />
    </div>
  </section>
);

export default Home;
