/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './App';
import {name as appName} from './app.json';
import EventScreen from './src/screens/homescreen/EventScreen';
// import CustomHeader from './src/components/CustomHeader';
// import EventScreen from './src/screens/homescreen/EventScreen';

// import OverBoard from './src/screens/auth/OverBoard';
// import SignUp from './src/screens/auth/SignUp';

AppRegistry.registerComponent(appName, () => EventScreen);
