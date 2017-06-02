import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const Text = styled.div\`
  color: #6c7172;
  font-size: 28px;
\`

const TextSmall = Text.extend\`
  font-size: 14px;
\`

render(
  <div>
    <Text>Text</Text>
    <TextSmall>TextSmall</TextSmall>
  </div>
)
`

export default () => (  
  <Template
    section="Styled Components Basics"
    title="Extending components styles (2.0)"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>1 classname generated!</Text>
    <Text auto smvergap>Extendable must a another styled-components?</Text>
  </Template>
)
