/** @jsx jsx */ /** @jsxRuntime classic */ import { jsx } from "theme-ui";
import Link from 'next/link'
import {AnimatedText} from 'framer-motion'

import theme from '../theme'

export default () => {
    return (
        <div>
             <div sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}
        >Hello Swana</div>
        {/* <div>
            <Word
                duration={0.5}
                fontColor="rgb(197, 22, 22)"
                 fontSize={120}
            
                 firstLine="First Line"
                />

        </div> */}
        

        </div>
       
    )
} 

