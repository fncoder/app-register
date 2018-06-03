import React from 'react';
import CommentButton from 'components/CommentButton';

const CommentForm = ({
  user, textarea, validate, handleSubmit, handleChange,
}) => (
  <form className="form-comment" onSubmit={handleSubmit}>
    <p className="comment-name">You are logged as {user.name}</p>
    <p className="validate validate-message">{validate.message ? validate.text : null}</p>
    <label htmlFor="label-message" className="label-message">
      <textarea id="label-message" className="comment-message" onChange={handleChange} value={textarea} placeholder="Your message" />
    </label>
    <CommentButton />
  </form>
);

export default CommentForm;
