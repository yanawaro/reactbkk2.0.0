import React from 'react'
import {
  Template,
  Image,
  Text
} from '../Theme' 

export default () => (  
  <Template
    section="Styled Components Tools"
    title="Syntax Higlighting"
  >
    <Image 
      src={`${process.env.PUBLIC_URL}/syntax-highlight.png`}
      maxWidth={'900px'}
    />
    <Text auto smvergap>Atom, VSCode, Sublime, Vim</Text>
  </Template>
)
