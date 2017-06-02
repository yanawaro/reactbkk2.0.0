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
    <LinkText auto topless href="#" target="_blank">Slide URL</LinkText>
  </ThemedContext>
)
