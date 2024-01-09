import { createGlobalStyle } from 'styled-components'

import { colorPalette } from './colorPalette'

//글로벌 스타일 정의
// reset... css
export default createGlobalStyle`
  ${colorPalette}
`
