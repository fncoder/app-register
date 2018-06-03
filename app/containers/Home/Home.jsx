import React from 'react';
import { connect } from 'react-redux';
import { loadLoginPage } from 'actions';
import { fetchPost, fetchPosts } from 'api';
import Home from 'components/Home';

class HomeContainer extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    const {
      user, textarea, inputStatus, fetchChangePost,
    } = this.props;

    if (inputStatus) {
      fetchChangePost({
        name: user.name,
        textarea,
      });
    }
  }

  render() {
    return (
      <Home />
    );
  }

  componentDidMount() {
    const { handleLoad, fetchLoadPosts } = this.props;
    handleLoad();
    fetchLoadPosts();
  }
}

const mapStateToProps = state => ({
  user: state.fetchValidateSuccess,
  textarea: state.addTextareaValue,
  inputStatus: state.changeInputStatus,
});

const mapDispatchToProps = dispatch => ({
  handleLoad: () => dispatch(loadLoginPage()),
  fetchChangePost: value => dispatch(fetchPost.fetchChangePost(value)),
  fetchLoadPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
