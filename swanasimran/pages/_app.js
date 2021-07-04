/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui'
import React from "react"
// import Head from "next/head"
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import {Head} from 'next/head';
import Nav from '../pages/src/components/nav'
import Word from './Word'
import Header from './src/components/Header'
// import "../static/hello"
import "../index.css"
import {Helmet} from "react-helmet";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>

      
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Nav />
        
        <Component {...pageProps} />
      </div>      
    </ThemeProvider>

    </React.Fragment>

    
  )
}