'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordpressPost from 'components/WordpressPost.js';

describe('WordpressPost', () => {
    let WordpressPostComponent;

    beforeEach(() => {
        WordpressPostComponent = createComponent(WordpressPost);
    });

    it('should have its component name as default className', () => {
        expect(WordpressPostComponent._store.props.className).toBe('WordpressPost');
    });
});
