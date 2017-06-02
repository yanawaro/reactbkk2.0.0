import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const variables = `const primaryColor = '#6c7172'`
const operations = `margin: \${100/3}px;`
const conditions = `\${props.center && \`text-align: center;\`}`
const mixins = `function from(size, css) {
  return \`@media (min-width: \${size}) { \${css} }\`
}`

export default () => (  
  <Template
    section="Working with Styled Components"
    title="Everything in javascript"
  >
    <Text auto smvergap>Variables</Text>
    <LiveCode
      justEditor
      code={variables}
    />
    <Text auto smvergap>Operations</Text>
    <LiveCode
      justEditor
      code={operations}
    />
    <Text auto smvergap>Conditions</Text>
    <LiveCode
      justEditor
      code={conditions}
    />
    <Text auto smvergap>Mixins = Functions</Text>
    <LiveCode
      justEditor
      code={mixins}
    />
    <Text auto medvergap>No webpack config for styles</Text>
  </Template>
)
