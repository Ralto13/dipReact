import { useState, useEffect } from 'react'
import EmoticonList from './components/home/EmoticonList'
import useEmoticons from './components/home/hooks/useEmoticons'
import EventBanner from './components/home/EventBanner'
import Navbar from './components/shared/Navbar'

//  https://www.iconfinder.com/ 아이콘 추천

import withAsyncBoundary from './hocs/withAsyncBoundary'

function App() {
  const [테마모드, 테마모드를변경하는함수] = useState(() =>
    localStorage.getItem('themeMode'),
  ) // white or dark
  // 콜백 = 지연초기를 위함
  const { data: emoticons = [] } = useEmoticons('')

  const [keyword, setKeyword] = useState('')

  const 다크모드인가 = 테마모드 === 'dark'

  useEffect(() => {
    localStorage.setItem('themeMode', 테마모드)
  }, [테마모드])

  const 검색결과리스트 =
    keyword === ''
      ? emoticons
      : emoticons.filter((emoticon) => {
          return emoticon.title
            .toLocaleLowerCase()
            .includes(keyword.toLocaleLowerCase())
        })

  return (
    <div style={다크모드인가 ? darkModeStyles : whiteModeStyles}>
      <Navbar />
      <EventBanner />
      <div
        onClick={() => {
          // 1. 로컬스토리지저장
          // 2. state 업데이트하는
          테마모드를변경하는함수(다크모드인가 ? 'white' : 'dark')
        }}
      >
        {다크모드인가 ? (
          <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-64.png"></img>
        ) : (
          <img src="https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/moon-64.png"></img>
        )}
      </div>
      {/* {검색폼} */}
      <input
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value)
        }}
      />
      <EmoticonList emoticons={검색결과리스트} />
      <div style={{ width: '100%', height: 100, backgroundColor: 'pink' }}>
        광고배너
      </div>
    </div>
  )
}

const whiteModeStyles = {
  color: '#444',
  backgroundColor: '#fff',
}

const darkModeStyles = {
  color: '#fff',
  backgroundColor: 'rgb(40,44,52)',
}

export default withAsyncBoundary(App, {
  pendingFallback: <div>앱 로딩중...</div>,
  rejectFallback: <div>앱에러 발생한 에러</div>,
})
