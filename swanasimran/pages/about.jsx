/** @jsx jsx */ /** @jsxRuntime classic */ import { jsx } from "theme-ui";
import Link from 'next/link'
import { useRouter } from 'next/router'

import Header from "./src/components/Header";


export default () => {
    const router = useRouter()
    return (
        
        <body sx={{
            backgroundColor: "text",
            height : "calc(100vh - 37px)"
            
        }}>
        <div style={{
            
        }}
         sx={{
            
            backgroundColor : "text",
            //display: 'flex',
            //height: "calc(100vh-600px)",
            width : 'auto',
            //alignItems: "flex-end"
            //justifyContent:"center"            
        }}>
            <p sx={{
              color :"background",
              ml:'3',
              fontSize: '50px', 
              position: "fixed",
              top: "30%",
              textShadow :"1px 1px 5px cornsilk"
          }}>
              Hello World, I'm Swana.
          </p>   
          <p sx={{
              color :"background",
              ml:'3',
              fontSize: '30px', 
              position: "fixed",
              top: "45%",
              '@media screen and (max-width: 40em)': {
                top: '50%',
              },
              textShadow :"2px 2px 5px cornsilk"
          }}> I am a undergrad student trying to make my way through engineering life. 
            </p>  
            <p
            sx={{
                color :"background",
                ml:'3',
                fontSize: '30px', 
                position: "fixed",
                top: "55%",
                '@media screen and (max-width: 40em)': {
                  top: '70%',
                },
                textShadow :"1px 1px 5px "
            }}>
            <Link href="/about">
                 <a sx={{ fontSize: 4, cursor: 'pointer', fontFamily:"monospace", color :"accent",
                
                    display: "inline-block",
                    position: "relative"
                   }}>About Me</a>
            </Link> | 
            <Link href="/">
                <a sx={{ fontSize: 4, cursor: 'pointer', fontFamily:"monospace", color :"highlight",  }}> Projects</a>
            </Link> |
            <Link href="/">
                <a sx={{ fontSize: 4, cursor: 'pointer', fontFamily:"monospace", color :"gray" }}> Achievements </a>
            </Link> |
            <Link href="/word">
                <a sx={{ fontSize: 4, cursor: 'pointer', fontFamily:"monospace", color :"primary" }}
                
                //onClick={() => router.push('/Word')}
                > Contact</a>
            </Link>
                </p>    
        </div>
        {/* <div style={{
            
        }}
         sx={{
            backgroundColor : "text",
            height: "calc(100vh - 198px)",
            width : 'auto',
            //alignItems: "center",
            //justifyContent:"center"
            
        }}>
           
          
                      
        </div> */}
            
        </body>
        
        
    )
} 

