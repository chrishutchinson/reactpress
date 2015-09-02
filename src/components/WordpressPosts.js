'use strict';

var React = require('react/addons');
var $ = require('npm-zepto');
var WordpressPost = require('./WordpressPost');

var App = require('../config.json');

require('styles/WordpressPosts.scss');

var WordpressPosts = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    $.ajax({
      url: App.defaults.apiUrl + 'posts',
      success: function(response) {
        this.setState({data: response});
      }.bind(this),
      error: function(response) {
        window.console.error(response);
      }
    });
  },

  render: function () {
    var postNodes = this.state.data.map(function (post) {
      return (
        <WordpressPost key={post.ID} post={post}></WordpressPost>
      );
    });

    return (
        <div className="WordpressPosts">
          {postNodes}
        </div>
      );
  }
});

module.exports = WordpressPosts;
