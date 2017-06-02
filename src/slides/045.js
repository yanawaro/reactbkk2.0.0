import React from 'react'
import {
  Template,
  Image,
  LinkText
} from '../Theme' 

export default () => (  
  <Template
    section="Styled Components Tools"
    title="Linting"
  >
    <Image 
      src={`${process.env.PUBLIC_URL}/linting.png`}
      maxWidth={'900px'}
    />
    <LinkText auto smvergap
      href="https://github.com/styled-components/stylelint-processor-styled-components"
      target="_blank"
    >https://github.com/styled-components/stylelint-processor-styled-components
    </LinkText>
  </Template>
)
