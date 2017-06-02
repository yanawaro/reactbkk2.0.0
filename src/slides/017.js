import React from 'react'
import {
  Template,
  Text,
  Image
} from '../Theme'

export default () => (  
  <Template
    section="React at Jitta"
    title="Why? We ended up with Styled Components"
  >
    <Text auto smvergap>New Jitta.com beta</Text>
    <Text auto smvergap>Made out of > 90% of our own base components</Text>
    <Image 
      src={`${process.env.PUBLIC_URL}/jitta-beta.png`}
      maxWidth={'900px'}
    />
  </Template>
)
