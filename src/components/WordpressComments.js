'use strict';

var React = require('react/addons');

var App = require('../config.json');
var WordpressComment = require('./WordpressComment');
var WordpressCommentBox = require('./WordpressCommentBox');

require('styles/WordpressComments.scss');

var WordpressComments = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {comments: []};
  },

  componentWillMount: function() {
    var commentNodes = '';
    $.ajax({
      url: App.defaults.apiUrl + 'posts/' + this.props.id + '/comments',
      success: function(response) {
        this.setState({comments: response});
      }.bind(this)
    });
  },

  render: function () {
    var commentNodes = this.state.comments.map(function (comment) {
      return (
        <WordpressComment key={comment.ID} comment={comment} />
      );
    });

    return (
        <div className="col-md-12">
          <div className="WordpressComments row">
            <h4>{commentNodes.length} Comments</h4>
            {commentNodes}
          </div>
          <div className="row">
            <WordpressCommentBox post={this.props.id} />
          </div>
        </div>
      );
  }
});

module.exports = WordpressComments;
