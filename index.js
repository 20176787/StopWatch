/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, {setGlobal} from 'reactn';
import App from './App';
import {name as appName} from './app.json';
setGlobal({
    lap: [],
});
AppRegistry.registerComponent(appName, () => App);
