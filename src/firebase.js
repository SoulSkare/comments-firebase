import firebase from 'firebase/app';

import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDGP-D8tl4xAdxvaf1yNmGIXWVpaLsK4ww',
  authDomain: 'comments-5f9cf.firebaseapp.com',
  databaseURL: 'https://comments-5f9cf.firebaseio.com',
  projectId: 'comments-5f9cf',
  storageBucket: 'comments-5f9cf.appspot.com',
  messagingSenderId: '141940691324',
  appId: '1:141940691324:web:9275c4001dea22595e14f9',
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
