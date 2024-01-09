import styled from 'styled-components'

import { typographyMap } from '../../styles/typography'
import { colors } from '../../styles/colorPalette'

const Text = styled.span(
  ({ color = 'black', display, textAlign, fontWeight, bold }) => ({
    color: color in colors ? colors[color] : color,
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
  }),
  ({ typography = 't5' }) => typographyMap[typography],
)

export default Text
