import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@mozartfinance/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
      font-family: 'Comic Sans MS', cursive, sans-serif;
 }
 body {
  background: url(/images/testbackdrop2.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`
export default GlobalStyle
