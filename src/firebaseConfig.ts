import * as firebase from 'firebase';
import { toast } from './toast';

const config = {
  apiKey: "AIzaSyAn3ZRXEJt8pVQTn4fVAwLNrvZ4RlrzuBY",
  authDomain: "user-login-project-f2374.firebaseapp.com",
  databaseURL: "https://user-login-project-f2374.firebaseio.com",
  projectId: "user-login-project-f2374",
  storageBucket: "user-login-project-f2374.appspot.com",
  messagingSenderId: "350338645861",
  appId: "1:350338645861:web:bd47e3c591b8ea3f"
}

firebase.initializeApp(config)

export async function loginUser(username: string, password: string) {
  const email = `${username}@yahoo.com`
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)

    console.log('res', res)
    return true
  } catch(error) {
    toast(error.message, 4000)
    return false
  }
}

export async function registerUser(username: string, password: string) {
  const email = `${username}@yahoo.com`
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)

    console.log('res', res)
    return true
  } catch (error) {
    toast(error.message, 4000)
    return false
  }
}