import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    -webkit-font-smoothing: antialiased;    
    background: #040F1A;    
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
  }
`
