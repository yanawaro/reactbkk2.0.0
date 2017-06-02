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
    <LinkText auto topless href="#" target="_blank">Slide URL</LinkText>
  </ThemedContext>
)
