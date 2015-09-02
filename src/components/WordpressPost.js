'use strict';

var React = require('react/addons');

var Router = require('react-router');
var Link = Router.Link;

require('styles/WordpressPost.scss');

var WordpressCategoryLabel = require('./WordpressCategoryLabel');

var WordpressPost = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function () {
    var thumbJSX = '';
    var excerptWidth = '12';
    if(this.props.post.featured_image) {
      thumbJSX = (
        <div className="col-md-2 col-sm-3">
          <img src={this.props.post.featured_image.attachment_meta.sizes.thumbnail.url} />
        </div>
      );
      excerptWidth = '10';
    }

    var categories = [];
    $.each(this.props.post.terms.category, function(i, category) {
      categories.push(<WordpressCategoryLabel key={i} category={category} />);
    });

    return (
        <div className="row WordpressPost">
          <div className="col-md-12">
            <h1>
              <Link to="post" params={{postId: this.props.post.slug}}>{this.props.post.title}</Link>
              <small> By {this.props.post.author.name}</small>
            </h1>
            <hr />
          </div>
          {thumbJSX}
          <div className={'col-md-' + excerptWidth + ' col-sm-7'}>
            <div dangerouslySetInnerHTML={{__html: this.props.post.excerpt}}></div>
            <Link to="post" className="btn btn-xs btn-danger" params={{postId: this.props.post.slug}}><i className="glyphicon glyphicon-eye-open"></i> Read full post</Link>
            <hr />
            <p>
              <strong>Categories: </strong>
              {categories}
            </p>
          </div>
        </div>
      );
  }
});

module.exports = WordpressPost;
