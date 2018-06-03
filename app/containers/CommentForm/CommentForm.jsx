import React from 'react';
import { connect } from 'react-redux';
import { addTextareaValue } from 'actions';
import { fetchPost } from 'api';
import CommentForm from 'components/CommentForm';

class CommentFormContainer extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { handleChange } = this.props;
    handleChange(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user, textarea, fetchClickPost } = this.props;
    fetchClickPost({
      name: user.name,
      textarea,
    });
  }

  render() {
    return (
      <CommentForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        textarea={this.props.textarea}
        validate={this.props.validate}
        user={this.props.user}
      />
    );
  }
}

const mapStateToProps = state => ({
  textarea: state.addTextareaValue,
  user: state.fetchValidateSuccess,
  validate: state.fetchCommentSuccess,
});

const mapDispatchToProps = dispatch => ({
  handleChange: value => dispatch(addTextareaValue(value)),
  fetchClickPost: value => dispatch(fetchPost.fetchClickPost(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentFormContainer);
