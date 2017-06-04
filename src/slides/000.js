import React from 'react'
import {
  ThemedContext,
  Title,
  Subtitle,
  Text,
  LinkText,
  ProfileImg,
  Flex
} from '../Theme'

export default () => (  
  <ThemedContext featured>
    <Title auto bottomless>Styled Components</Title>
    <Text auto topless>Change you css styling mindset!</Text>
    <Flex column medhozgap>
      <ProfileImg auto medvergap src={`${process.env.PUBLIC_URL}/profile.jpg`} />
    </Flex>
    <Subtitle auto gapless>Yanin Tuamsuk</Subtitle>
    <Subtitle auto gapless>Front-end Engineer @ Jitta</Subtitle>
    <LinkText auto topless
      href="https://yanawaro.github.io/reactbkk2.0.0"
      target="_blank">
      https://yanawaro.github.io/reactbkk2.0.0
    </LinkText>
  </ThemedContext>
)
