import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import cover from './assets/cover.png'
import { Header } from './styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header>
      <img src={cover} alt="ImageHeader" />
      <GlobalStyle/>
      </Header>
    </ThemeProvider>
  )
}

