'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordpressCategoryLabel from 'components/WordpressCategoryLabel.js';

describe('WordpressCategoryLabel', () => {
    let WordpressCategoryLabelComponent;

    beforeEach(() => {
        WordpressCategoryLabelComponent = createComponent(WordpressCategoryLabel);
    });

    it('should have its component name as default className', () => {
        expect(WordpressCategoryLabelComponent._store.props.className).toBe('WordpressCategoryLabel');
    });
});
