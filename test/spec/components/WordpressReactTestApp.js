'use strict';

describe('WordpressReactTestApp', () => {
  let React = require('react/addons');
  let WordpressReactTestApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    WordpressReactTestApp = require('components/WordpressReactTestApp.js');
    component = React.createElement(WordpressReactTestApp);
  });

  it('should create a new instance of WordpressReactTestApp', () => {
    expect(component).toBeDefined();
  });
});
