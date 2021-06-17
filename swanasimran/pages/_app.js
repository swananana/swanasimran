/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from '../pages/src/components/nav'
import Word from '../pages/src/components/word'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        
        <Component {...pageProps} />
      </div>      
    </ThemeProvider>
  )
}