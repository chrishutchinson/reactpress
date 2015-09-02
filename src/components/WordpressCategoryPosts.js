'use strict';

var React = require('react/addons');

var Router = require('react-router');
var $ = require('npm-zepto');
var WordpressPost = require('./WordpressPost');

var App = require('../config.json');

require('styles/WordpressCategoryPosts.scss');

var WordpressCategoryPosts = React.createClass({

  mixins: [ Router.State ],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {data: []};
  },

  loadData: function(id, callback) {
  	$.ajax({
      url: App.defaults.apiUrl + 'posts?filter[cat]=' + id,
      success: function(response) {
        callback(response);
      }.bind(this),
      error: function(response) {
        window.console.error(response);
      }
    });
  },

  componentWillReceiveProps: function(props) {
  	this.loadData(props.params.categoryId, function(response) {
      this.setState({data: response});
    }.bind(this));
  },

  componentDidMount: function() {
   	this.loadData(this.context.router.getCurrentParams().categoryId, function(response) {
      this.setState({data: response});
    }.bind(this));
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

module.exports = WordpressCategoryPosts;
