/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from '../pages/src/components/nav'
import Word from './Word'
import Header from './src/components/Header'

import "../index.css"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Nav />
        
        <Component {...pageProps} />
      </div>      
    </ThemeProvider>
  )
}