'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordpressCommentBox from 'components/WordpressCommentBox.js';

describe('WordpressCommentBox', () => {
    let WordpressCommentBoxComponent;

    beforeEach(() => {
        WordpressCommentBoxComponent = createComponent(WordpressCommentBox);
    });

    it('should have its component name as default className', () => {
        expect(WordpressCommentBoxComponent._store.props.className).toBe('WordpressCommentBox');
    });
});
