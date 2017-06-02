import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `//import { css } from 'styled-components'
const TextColor = 'rgba(170, 187, 195, 1.0)'
const TextStyle = css\`
  font-family: 'Menlo', sans-serif;
  color: \${TextColor};
\`
const Title = styled.h1\`
  \${TextStyle}
\`
const Subtitle = styled.h3\`
  \${TextStyle}
\`
const Text = styled.p\`
  \${TextStyle}
  font-size: 24px;
\`
render(
  <div>
    <Title>Title</Title>
    <Subtitle>Subtitle</Subtitle>
    <Text>Text</Text>
  </div>
)
`

export default () => (  
  <Template
    section="Working with Styled Components"
    title="The { css } api"
  >
    <LiveCode
      code={components}
    />
    <Text auto medvergap>Build you styles before actually building as components.</Text>
    <Text auto smvergap>Highly sharable code here.</Text>
  </Template>
)
