import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const firebaseConfig = {
  apiKey: 'AIzaSyANZxLXgDgOjGXU_he2Qu3kgejl4Df06vU',
  authDomain: 'login-signup-page-218df.firebaseapp.com',
  projectId: 'login-signup-page-218df',
  storageBucket: 'login-signup-page-218df.appspot.com',
  messagingSenderId: '317177001467',
  appId: '1:317177001467:web:b5e3a559c94b5da650075e',
  measurementId: 'G-2Z96DF99K1'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// const provider = new GoogleAuthProvider()

// const signInWithGoogle = () => {
//   const navigate = useNavigate()
//   signInWithPopup(auth, provider)
//     .then(result => {
//       navigate('/')
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

export { app, auth }
export default auth
