import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const Tooltip = styled.div\`
  position: fixed;
  top: \${props => \`\${props.top}px\` };
  left: \${props => \`\${props.left}px\` };
  padding: 16px;
  background-color: #f00;
  color: #666;
\`

render(
  class Test extends React.Component {
    constructor(props) {
      super(props)
      this.state = { top: 0, left: 0 }
      this.onMouseMove = (e) => {
        this.setState({ top: e.clientY, left: e.clientX })
      }
    }
    componentDidMount() {
      window.addEventListener('mousemove', this.onMouseMove)
    }
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.onMouseMove)
    }
    render() {
      const { top, left } = this.state

      return (
        <Tooltip top={top} left={left}>Tooltip</Tooltip>
      )
    }
  }
)
`

export default () => (  
  <Template
    section="Styled Components Performance"
    title="Interactive css"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>Arbitrary props, like positions.</Text>
    <Text auto smvergap>Inline css is better.</Text>
  </Template>
)
