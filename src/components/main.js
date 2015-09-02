'use strict';

var WordpressPosts = require('./WordpressPosts');
var WordpressCategoryPosts = require('./WordpressCategoryPosts');
var WordpressSinglePost = require('./WordpressSinglePost');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

require('../styles/main.scss');
require('bootstrap/dist/css/bootstrap.css');
require('bootswatch/cosmo/bootstrap.css');

var app = document.getElementById('app');

var Routes = (
  <Route name="/">
    <Route name="posts" path="/" handler={WordpressPosts} />
    <Route name="post" path="/post/:postId" handler={WordpressSinglePost} />
    <Route name="category" path="/category/:categoryId" handler={WordpressCategoryPosts} />
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, app);
});
