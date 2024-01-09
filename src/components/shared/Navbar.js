import useSign from '../../hooks/useSign'
import useUser from '../../hooks/useUser'

function Navbar() {
  const { signin, signout } = useSign()
  const user = useUser()
  console.log('nav', user)
  return (
    <div>
      <h1>로고</h1>
      {user == null ? (
        <button onClick={signin}>로그인</button>
      ) : (
        <div>
          {user.displayName}
          <button onClick={signout}>로그아웃</button>
        </div>
      )}
    </div>
  )
}

export default Navbar
