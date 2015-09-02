'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordpressPosts from 'components/WordpressPosts.js';

describe('WordpressPosts', () => {
    let WordpressPostsComponent;

    beforeEach(() => {
        WordpressPostsComponent = createComponent(WordpressPosts);
    });

    it('should have its component name as default className', () => {
        expect(WordpressPostsComponent._store.props.className).toBe('WordpressPosts');
    });
});
