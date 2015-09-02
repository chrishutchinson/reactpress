'use strict';

var React = require('react/addons');


require('styles/WordpressCommentBox.scss');

var WordpressCommentBox = React.createClass({

  getInitialState: function() {
  	return {commentText: ''};
  },

  submitComment: function() {
    console.log(this.state.commentText);
  },

  updateCommentText: function(event) {
  	this.setState({commentText: event.target.value});
  },

  render: function () {
    return (
        <div className="WordpressCommentBox">
          <hr />
          <h4>Write your own comment</h4>
          <div className="form-group">
            <textarea className="form-control" placeholder="Enter your comment here" onChange={this.updateCommentText}></textarea>
          </div>
          <div className="form-group">
            <input type="submit" onClick={this.submitComment} className="btn btn-primary" value="Submit comment" />
          </div>
        </div>
      );
  }
});

module.exports = WordpressCommentBox;
