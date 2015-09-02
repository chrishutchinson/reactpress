'use strict';

var React = require('react/addons');


require('styles/WordpressComment.scss');

var WordpressComment = React.createClass({

  render: function () {
    return (
    	<div className="col-md-9 well">
	      <div dangerouslySetInnerHTML={{__html: this.props.comment.content}}></div>
	      <cite>written by {this.props.comment.author.name} on {this.props.comment.date}</cite>
	    </div>
      );
  }
});

module.exports = WordpressComment;
