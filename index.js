/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Route from './src/navigation/Route';
// import OverBoard from './src/screens/auth/OverBoard';
// import SignUp from './src/screens/auth/SignUp';

AppRegistry.registerComponent(appName, () =>Route);
