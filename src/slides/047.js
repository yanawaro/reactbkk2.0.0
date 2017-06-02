import React from 'react'
import {
  Template,
  Image,
  LinkText
} from '../Theme' 

export default () => (  
  <Template
    section="Styled Components Tools"
    title="Polished"
  >
    <LinkText auto medvergap
      href="https://github.com/styled-components/polished"
      target="_blank"
    >https://github.com/styled-components/polished
    </LinkText>
    <Image auto
      src={`${process.env.PUBLIC_URL}/polished.png`}
      maxWidth={'900px'}
    />
    <Image auto
      src={`${process.env.PUBLIC_URL}/polished2.png`}
      maxWidth={'900px'}
    />
  </Template>
)
