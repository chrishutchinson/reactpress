'use strict';

var React = require('react/addons');
var $ = require('npm-zepto');

require('styles/WordpressSinglePost.scss');

var App = require('../config.json');

var Router = require('react-router');
var Link = Router.Link;

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var WordpressBreadcrumbs = require('./WordpressBreadcrumbs');
var WordpressComments = require('./WordpressComments');

var WordpressSinglePost = React.createClass({

  mixins: [ Router.State ],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {};
  },

  componentWillMount: function() {
    $.ajax({
      url: App.defaults.apiUrl + 'posts?filter[name]=' + this.context.router.getCurrentParams().postId,
      success: function(response) {
        this.setState(response[0]);
      }.bind(this)
    });
  },

  render: function () {
    if(typeof this.state.ID !== 'undefined') {
      return (
        <div class="row">
          <div class="col-md-12">
            <WordpressBreadcrumbs state={this.state} />
           
            <ReactCSSTransitionGroup transitionName="test">
              <div className="WordpressSinglePost">
                <h1>{this.state.title} <small>By {this.state.author.name}</small></h1>
                <hr />
                <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
              </div>
            </ReactCSSTransitionGroup>
          </div>
          
          <WordpressComments id={this.state.ID} />
        </div>
      );
    }

    return (<div>Loading...</div>);
  }
});

module.exports = WordpressSinglePost;
