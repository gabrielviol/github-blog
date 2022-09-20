import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import cover from './assets/cover.png'
import { Banner, Header } from './styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header>
        <img src={cover} alt="ImageHeader" />
      </Header>
      <Banner>
        <div>
        <img src="" alt="ImageProfile" />
        <div>
          <span>Gabriel Oliveira</span>
          <a href="/">GITHUB</a>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quae repellendus blanditiis provident optio dolorum exercitationem temporibus labore cumque commodi, quibusdam</p>
        <div>
          <span>Github</span>
          <span>Empresa</span>
          <span>10 Seguidores</span>
        </div>
        </div>
      </Banner>
    </ThemeProvider>
  )
}

