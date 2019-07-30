import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends React.Component{
  state = { comment: '' };

  // our component just rendered first time
  componentDidMount(){
    this.shouldNavigateAway();
  }

  // our component just updated
  componentDidUpdate(){
    this.shouldNavigateAway();
  }

  // helper
  shouldNavigateAway(){
    if (!this.props.auth) {
      console.log('I need to leave!');
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.state.comment !== nextState.comment) {
      return true;
    }
    return false;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea
            value={this.state.comment}
            onChange={this.handleChange}/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, actions)(CommentBox);
