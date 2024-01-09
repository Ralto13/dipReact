import { useQuery } from 'react-query'

function useEmoticons() {
  return useQuery(
    ['emoticons'],
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
}

export default useEmoticons
//useQuery 계속 데이터 가져옴 refetch시도
