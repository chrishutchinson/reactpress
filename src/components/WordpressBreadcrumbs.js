'use strict';

var React = require('react/addons');

var Router = require('react-router');
var Link = Router.Link;

require('styles/WordpressBreadcrumbs.scss');

var WordpressBreadcrumbs = React.createClass({

  render: function () {
    return (
      <ol className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li className="active">{this.props.state.title}</li>
      </ol>
    );
  }
});

module.exports = WordpressBreadcrumbs;
