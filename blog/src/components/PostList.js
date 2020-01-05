import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  //call action creator from 'componentDidMount'
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
