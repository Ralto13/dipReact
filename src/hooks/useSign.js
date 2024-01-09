import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, store } from '../remote/firebase'

function useSign() {
  const signin = async () => {
    const provider = new GoogleAuthProvider()

    const { user } = await signInWithPopup(auth, provider)
    //collection이 table임
    const userSnapshot = await getDoc(doc(collection(store, 'USERS'), user.uid))

    if (userSnapshot.exists()) {
      //todo
    } else {
      const newUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }
      await setDoc(userSnapshot.ref, newUser)

      //가입완려
    }
    console.log('useSign', user)
  }

  const signout = () => {
    auth.signOut()
  }

  return { signin, signout }
}
export default useSign
