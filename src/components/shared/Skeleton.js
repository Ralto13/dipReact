import styled from 'styled-components'

const Skeleton = styled.div(({ width = '100%', height = '80' }) => ({
  width,
  height,
  backgroundColor: '#efefef',
}))

export default Skeleton
