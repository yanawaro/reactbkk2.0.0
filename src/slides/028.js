import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const margin = css\`
  \${props => props.auto && 'margin: auto;'}
  \${props => props.biggap && 'margin: 64px auto;'}
\`

const textStyle = css\`
  \${margin};
  font-family: 'Menlo', sans-serif;
  color: #666;
\`

const Title = styled.h1\`
  \${margin}
  \${textStyle}
\`

render(
  <div>
    <Title auto>Title</Title>
    <Title biggap>Title Biggap</Title>
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
    <Text auto medvergap>Props our flown into css too!</Text>
    <Text auto smvergap>Thinks of order like css, last one overrides.</Text>
  </Template>
)
