import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const a = 'a'
const b = () => { return 'b' }

render(console.log(\`this returns \${a} single string \${b}\`))
render(console.log\`this returns \${a} array of strings and interpolations \${b} as args\`)
`

export default () => (  
  <Template
    section="Styled Components Basics"
    title="Tagged template literals"
  >
    <LiveCode
      justEditor
      code={components}
    />
    <Text auto smvergap>Styled Components built on this language feature.</Text>
    <Text auto smvergap>Parsing the string and interpolations to be more useful.</Text>
  </Template>
)
