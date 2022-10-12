import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Blog } from './pages/Blog'
import { Header } from './components/layout/Header'
import { AppRoutes } from './routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header/>
      <AppRoutes />
    </ThemeProvider>
  )
}

