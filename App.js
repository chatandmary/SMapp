import { createAppContainer, createStackNavigator } from 'react-navigation';
import firebase from 'firebase';

import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

require("firebase/firestore");

import ENV from './env.json';

const config = {
        apiKey:             ENV.FIREBASE_API_KEY,
        authDomain:         ENV.FIREBASE_AUTH_DOMAIN,
        databaseURL:        ENV.FIREBASE_DB_URL,
        projectId:          ENV.FIREBASE_PRJ_ID,
        storageBucket:      ENV.FIREBASE_STORAGE,
        messagingSenderId:  ENV.FIREBASE_SENDER_ID,
      };
      firebase.initializeApp(config);

const App = createStackNavigator({
  Login:      { screen: LoginScreen},
  Signup:     { screen: SignUpScreen},
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen},
  MemoEdit:   { screen: MemoEditScreen},
  MemoCreate: { screen: MemoCreateScreen},
}, {
  defaultNavigationOptions: { 
      headerTitle: 'Suvival Memo',
      headerTintColor: '#fff',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor:'#7B8437',
      },
      headerTitleStyle: {
        color:'#fff',
        fontSize:24,
      },
    },
});


export default createAppContainer(App);





