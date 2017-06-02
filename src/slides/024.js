import React from 'react'
import {
  Template,
  Text,
  Flex
} from '../Theme'
import LiveCode from '../LiveCode'

const components = `const Heading = styled.h3\`
  font-family: \${props => props.theme.font}
  padding: 4px 8px;
  color: \${props => props.theme.fontColor};
\`

Heading.defaultProps = {
	theme: {
		font: 'Menlo',
    fontColor: '#3e4141'
	}
}

const theme1 = {
  font: 'serif',
  fontColor: '#00bd9c'
}

render(
  <div>
    <Heading>Button</Heading>
    <ThemeProvider theme={theme1}>
      <Heading>Button</Heading>
    </ThemeProvider>
  </div>
)
`

const hoc = `import { withTheme } from 'styled-components'
const Link = (props) => { console.log(props.theme) }
export default withTheme(Link)
`

export default () => (  
  <Template
    section="Styled Components Advanced"
    title="Theme Provider"
  >
    <Flex>
      <Flex column medhozgap>
        <LiveCode
          code={components}
        />
      </Flex>
      <Flex column medhozgap>
        <Text>or as Higher order component</Text>
        <LiveCode
          justEditor
          code={hoc}
        />
      </Flex>
    </Flex>
  </Template>
)
