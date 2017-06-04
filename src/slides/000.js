import React from 'react'
import {
  ThemedContext,
  Title,
  Subtitle,
  Text,
  LinkText,
  ProfileImg
} from '../Theme'

export default () => (  
  <ThemedContext featured>
    <Title auto bottomless>Styled Components</Title>
    <Text auto topless>Change you css styling mindset!</Text>
    <ProfileImg auto medvergap src={`${process.env.PUBLIC_URL}/profile.jpg`} />
    <Subtitle auto gapless>Yanin Tuamsuk</Subtitle>
    <Subtitle auto gapless>Front-end Engineer @ Jitta</Subtitle>
    <LinkText auto topless
      href="https://yanawaro.github.io/reactbkk2.0.0"
      target="_blank">
      https://yanawaro.github.io/reactbkk2.0.0
    </LinkText>
  </ThemedContext>
)
