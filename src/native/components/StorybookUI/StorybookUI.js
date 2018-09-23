import React from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI } from '@storybook/react-native';

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({
    port: 7007,
    onDeviceUI: true,
});

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUI extends React.Component {
    render() {
        return <StorybookUIRoot />;
    }
}

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUI);
export default StorybookUI;