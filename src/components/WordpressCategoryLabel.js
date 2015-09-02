'use strict';

var React = require('react/addons');

var Router = require('react-router');
var Link = Router.Link;

require('styles/WordpressCategoryLabel.sass');

var WordpressCategoryLabel = React.createClass({

  render: function () {
    return (
     <Link to="category" className="label label-primary label-space" params={{categoryId: this.props.category.ID}}>{this.props.category.name}</Link>
    );
  }
});

module.exports = WordpressCategoryLabel;
