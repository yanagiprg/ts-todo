import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAFSSvekiqc0XrJtTQNaRvthRNE15yNM8Q',
    authDomain: 'ts-todo-bcd7b.firebaseapp.com',
    databaseURL: 'https://ts-todo-bcd7b.firebaseio.com',
    projectId: 'ts-todo-bcd7b',
    storageBucket: 'ts-todo-bcd7b.appspot.com',
    messagingSenderId: '656917608523',
    appId: '1:656917608523:web:09904b6517f713468335ce',
    measurementId: 'G-GW25XSFXJ2',
  })
}

export default firebase
