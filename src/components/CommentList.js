import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component{
  shouldComponentUpdate(nextProps, nextState){
    if (this.props.comments !== nextProps.comments) {
      return true;
    }
    return false;
  };

  renderComments(){
    return(
      this.props.comments.map(comment => {
        return <li key={comment}>{comment}</li>
      })
    );
  };

  render(){
    return(
      <div>
        <h4>CommentList</h4>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return { comments: state.comments };
};

export default connect(mapStateToProps)(CommentList);
