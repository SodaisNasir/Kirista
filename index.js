/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import OverBoard from './src/screens/auth/OverBoard';
import SignUp from './src/screens/auth/SignUp';

AppRegistry.registerComponent(appName, () => OverBoard);
