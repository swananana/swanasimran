/** @jsx jsx */ /** @jsxRuntime classic */ import { jsx } from "theme-ui";
import Link from 'next/link'
import {AnimatedText} from 'framer-motion'

import theme from '../theme'


export default () => {
    return (
        <body sx={{
            backgroundColor: "text",
            height : '100%'
        }}>
        <div sx={{
            
            backgroundColor : "text",
            display: 'flex',
            height:'100vh',
            width : 'auto',

            alignItems: "center",
            //justifyContent:"center"

            
        }}>
            <center>
            <h2 sx={{
              color :"background",
              ml:'3'
          }}>
              Hello World, I'm Swana.
          </h2>

            </center>
          
        </div>
            
        </body>
        
    )
} 

