import React from 'react';
import { connect } from 'react-redux';
import Posts from 'components/Posts';

class PostsContainer extends React.Component {
  render() {
    return (
      <Posts items={this.props.posts} />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.fetchPostsSuccess,
});

export default connect(mapStateToProps)(PostsContainer);
