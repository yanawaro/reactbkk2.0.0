import React from 'react'
import {
  Template,
  Image
} from '../Theme'

export default () => (  
  <Template
    section="React at Jitta"
    title="Why? We ended up with Styled Components"
  >
    <Image 
      src={`${process.env.PUBLIC_URL}/styled-components.png`}
      maxWidth={'900px'}
    />
  </Template>
)
