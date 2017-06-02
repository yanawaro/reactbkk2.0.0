import React from 'react'
import {
  Template,
  Text,
  LinkText,
  Image
} from '../Theme'

export default () => (  
  <Template
    section="Styled Components Intro"
    title="Came across Rebass code"
  >
    <Image auto smvergap
      src={`${process.env.PUBLIC_URL}/rebass.png`}
      maxWidth={'550px'}
    />
    <LinkText auto smvergap
      href="https://github.com/jxnblk/rebass"
      target="_blank"
    >https://github.com/jxnblk/rebass
    </LinkText>
    <Text auto smvergap>Base component pattern.</Text>
    <Text auto smvergap>Base components helps generate base styles.</Text>
  </Template>
)
