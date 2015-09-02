'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordpressSinglePost from 'components/WordpressSinglePost.js';

describe('WordpressSinglePost', () => {
    let WordpressSinglePostComponent;

    beforeEach(() => {
        WordpressSinglePostComponent = createComponent(WordpressSinglePost);
    });

    it('should have its component name as default className', () => {
        expect(WordpressSinglePostComponent._store.props.className).toBe('WordpressSinglePost');
    });
});
