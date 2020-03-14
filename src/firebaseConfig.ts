import * as firebase from 'firebase';
import { toast } from './toast';

const config = {

}

firebase.initializeApp(config)

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        resolve(user)
      } else {
        resolve(null)
      }
      unsubscribe()
    })
  })
}

export function logoutUser() {
  return firebase.auth().signOut()
}

export async function loginUser(username: string, password: string) {
  const email = `${username}@yahoo.com`
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)
    return res
  } catch(error) {
    toast(error.message, 4000)
    return false
  }
}

export async function registerUser(username: string, password: string) {
  const email = `${username}@yahoo.com`
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password)

    return res
  } catch (error) {
    toast(error.message, 4000)
    return false
  }
}