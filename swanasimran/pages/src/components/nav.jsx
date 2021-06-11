/** @jsx jsx */ /** @jsxRuntime classic */ import { jsx } from "theme-ui";
import Link from 'next/link'

const Nav = () => (
  
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link href="/">
        <a sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}>S W A N A</a>
      </Link>


    </nav>
  
)

export default Nav