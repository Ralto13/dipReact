import { useQuery } from 'react-query'

import withAsyncBoundary from '../../hocs/withAsyncBoundary'
function EventBanner() {
  useQuery(
    ['EventBanner'],
    () =>
      fetch('http://localhost:8888/emoticons').then((response) => {
        if (response.ok === true) {
          return response.json()
        } else {
          throw new Error('데이터 가져오기 실패!')
        }
      }),
    {
      suspense: true,
    },
  )
  return <div style={{ width: '100%', height: 200 }}>EventBanner</div>
}

export default withAsyncBoundary(EventBanner, {
  pendingFallback: <div>로딩중...</div>,
  rejectFallback: <div>이벤트배너에서 발생한 에러</div>,
})
