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
    <Title auto bottomless>styled-components</Title>
    <Text auto topless>Created by</Text>
    <Flex center>
      <Flex column medhozgap>
        <ProfileImg auto medvergap src={'https://pbs.twimg.com/profile_images/683874690293612545/kDStZOBp_400x400.png'} />
        <Subtitle auto>Glen Maddern</Subtitle>
      </Flex>
      <Flex column medhozgap>
        <ProfileImg auto medvergap src={'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg'} />
        <Subtitle auto>Max Stoiber</Subtitle>
      </Flex>
      <Flex column medhozgap>
        <ProfileImg auto medvergap src={'https://pbs.twimg.com/profile_images/755148129968787457/iQ16fdT9_400x400.jpg'} />
        <Subtitle auto>Phil Plückthun</Subtitle>
      </Flex>
    </Flex>
    <Subtitle auto bottomless>Just released version 2.0!</Subtitle>
    <LinkText 
      auto 
      topless 
      href="github.com/styled-components/styled-components"
      target="_blank"
    >github.com/styled-components/styled-components
    </LinkText>
  </ThemedContext>
)
