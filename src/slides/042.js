import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const Div = styled.div\`\`
const Input = styled.input\`\`

const InputInstance = <Input placeholder="Search" innerRef={dom => { this.domNode = dom; console.log(dom)}} />

const Form = () => {
  console.log(this)
  return <Div id="test" innerRef={function(dom) { this.domNode = dom; console.log(this)}} />
}

render(
  <Form />
)

// wrapper.find(Input.focus()) //doesn't work
// wrapper.find(Input.focus()) //doesn't work
`

export default () => (
  <Template
    section="Testing Styled Components"
    title="Getting the real DOM node"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>Selecting style-components doesn't get the DOM.</Text>
  </Template>
)
