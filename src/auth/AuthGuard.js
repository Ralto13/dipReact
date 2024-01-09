import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../remote/firebase'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { userAtom } from '../atom/userAtom'

function AuthGuard({ children }) {
  //인증처리용
  const [초기화, set초기화] = useState(false)

  //
  const updateUserInfo = useSetRecoilState(userAtom)

  onAuthStateChanged(auth, (user) => {
    console.log('AuthGuard', user)
    //전역상태 관리자를 이용
    if (user == null) {
      //todo:전역상태관리자에 저장
      updateUserInfo(null)
    } else {
      // 로그인전 아무것도 안함
      //전역상태 관리자의 유저값을 기본으로 돌림
      updateUserInfo({
        displayName: user.displayName ?? '',
        photoURL: user.photoURL ?? '',
        email: user.email,
        uid: user.uid,
      })
    }
    set초기화(true)
  })

  if (초기화 === false) {
    return null
  }

  return <>{children}</>
}

export default AuthGuard
