'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import WordpressBreadcrumbs from 'components/WordpressBreadcrumbs.js';

describe('WordpressBreadcrumbs', () => {
    let WordpressBreadcrumbsComponent;

    beforeEach(() => {
        WordpressBreadcrumbsComponent = createComponent(WordpressBreadcrumbs);
    });

    it('should have its component name as default className', () => {
        expect(WordpressBreadcrumbsComponent._store.props.className).toBe('WordpressBreadcrumbs');
    });
});
