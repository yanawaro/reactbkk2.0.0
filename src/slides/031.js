import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const screen = {
  md: '640px',
  lg: '990px'
}

function from(screen, css) {
  return \`@media (min-width: \${screen}) {
    \${css}
  }\`
}

function textEllipsis() {
  return \`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  \`
}

const Text = styled.p\`
  padding: 12px;
  font-size: 16px;
  max-width: 100px;
  \${from(screen.md, 'font-size: 16px;')}
  \${textEllipsis()}
  \${from(screen.lg, textEllipsis())}
\`

render(
  <Text>This text should be somehow long beyond 100px</Text>
)
`

export default () => (  
  <Template
    section="Working with Styled Components"
    title="Mixins"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>A function that generates css strings</Text>
  </Template>
)
