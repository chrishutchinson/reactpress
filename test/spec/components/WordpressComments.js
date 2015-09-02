'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordpressComments from 'components/WordpressComments.js';

describe('WordpressComments', () => {
    let WordpressCommentsComponent;

    beforeEach(() => {
        WordpressCommentsComponent = createComponent(WordpressComments);
    });

    it('should have its component name as default className', () => {
        expect(WordpressCommentsComponent._store.props.className).toBe('WordpressComments');
    });
});
