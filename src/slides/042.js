import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const Input = styled.input\`\`

render(
  class Form extends React.Component {
    constructor(props) {
      super(props)
      this.inputDomNode = null
    }
    render() {
      return (
        <Input 
          placeholder="Search" 
          innerRef={dom => this.inputDomNode = dom}
          onFocus={() => console.log(this.inputDomNode)}
        />
      )
    }
  }
)

//...
//wrapper.find(Form.getNode().inputDomNode.focus())
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
