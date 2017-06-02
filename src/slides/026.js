import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `//variables file
const baseMargin = '8px'
const primaryColor = '#e44c87'
const borderRadius = '4px'

//component file
const Button = styled.button\`
  margin: \${baseMargin};
  color: \${primaryColor};
  background-color: #fff;
  border: 2px solid \${primaryColor};
  border-radius: \${borderRadius};
\`

render(<Button>Button with style!</Button>)
`

export default () => (  
  <Template
    section="Working with Styled Components"
    title="Styles Variables"
  >
    <LiveCode
      code={components}
    />
    <Text auto medvergap>Export your variables, interpolate!</Text>
  </Template>
)
