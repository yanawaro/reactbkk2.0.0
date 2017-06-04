import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const Tooltip = styled.div.attrs({
  style: props => ({
    top: \`\${props.top}px\`,
    left: \`\${props.left}px\` 
  })
})\`
  position: fixed;
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
      return (<Tooltip top={top} left={left}>Tooltip</Tooltip>)
    }
  }
)
`

export default () => (  
  <Template
    section="Styled Components Performance"
    title="The { attr } api (2.0)"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>Able to use inline styles right in styled-components</Text>
  </Template>
)
