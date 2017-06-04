import React from 'react'
import {
  ThemedContext,
  Title,
  Text,
  LinkText
} from '../Theme' 

export default () => (  
  <ThemedContext featured>
    <Title auto bottomless>Styled Components</Title>
    <Text auto topless>Change you css styling mindset!</Text>
    <Title auto topless>Thanks for listening! && Q/A?</Title>
    <LinkText 
      auto topless 
      href="https://yanawaro.github.io/reactbkk2.0.0" 
      target="_blank"
    >https://yanawaro.github.io/reactbkk2.0.0
    </LinkText>
  </ThemedContext>
)
