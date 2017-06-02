import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const Text = styled.div\`
  display: \${props => props.show ? 'block' : 'none'};
\`

const Button = styled.button\`
  display: block;
  width: 100%;
  border: 1px solid #666;
  color: #666;
  background-color: #fff;
\`

render(
  class Test extends React.Component {
    constructor(props) {
      super(props)
      this.state = { show: true }
    }
    render() {
      const { show } = this.state

      return (
        <div>
          <Text show={show}>This is some text.</Text>
          <Button onClick={() => this.setState({ show: !show })}>Click</Button>
        </div>
      )
    }
  }
)
`

export default () => (  
  <Template
    section="Styled Components Performance"
    title="Decalare your components outside render"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>Lazy generated.</Text>
  </Template>
)
