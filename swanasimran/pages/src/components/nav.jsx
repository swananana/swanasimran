/** @jsx jsx */ /** @jsxRuntime classic */ import { jsx } from "theme-ui";
import Link from 'next/link'


const Nav = () => (
  
    <nav sx={{display: 'flex', alignItems: 'center', backgroundColor:"text",  justifyContent: 'center',mr:3, variant: 'containers.page', height: '100%'}}>
      <Link href="/">
        <a sx={{ fontSize: 4, cursor: 'pointer', fontFamily:"monospace", color :"background" }}>S W A N A</a>
      </Link>


    </nav>
  
)

export default Nav

