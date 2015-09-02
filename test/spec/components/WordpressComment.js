'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordpressComment from 'components/WordpressComment.js';

describe('WordpressComment', () => {
    let WordpressCommentComponent;

    beforeEach(() => {
        WordpressCommentComponent = createComponent(WordpressComment);
    });

    it('should have its component name as default className', () => {
        expect(WordpressCommentComponent._store.props.className).toBe('WordpressComment');
    });
});
