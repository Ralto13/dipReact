import { useRecoilValue } from 'recoil'
import { userAtom } from '../atom/userAtom'

function useUser() {
  return useRecoilValue(userAtom)
}

export default useUser
