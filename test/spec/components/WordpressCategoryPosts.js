'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordpressCategoryPosts from 'components/WordpressCategoryPosts.js';

describe('WordpressCategoryPosts', () => {
    let WordpressCategoryPostsComponent;

    beforeEach(() => {
        WordpressCategoryPostsComponent = createComponent(WordpressCategoryPosts);
    });

    it('should have its component name as default className', () => {
        expect(WordpressCategoryPostsComponent._store.props.className).toBe('WordpressCategoryPosts');
    });
});
