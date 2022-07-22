import firebase from 'firebase/app'
// import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBK2_xqltoQFuNlf5BmAR70_plgESp539c",
    authDomain: "markusdavis-e120a.firebaseapp.com",
    projectId: "markusdavis-e120a",
    storageBucket: "markusdavis-e120a.appspot.com",
    messagingSenderId: "781804997464",
    appId: "1:781804997464:web:5844b5c97712e596cf732d",
    measurementId: "G-RYG7W5TXDB"
}
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
export const db = app.firestore()
export const storage = app.storage()
export default app
