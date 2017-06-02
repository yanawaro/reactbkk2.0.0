import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const variants = {
  default: css\` font-size: 32px;\`,
  big: css\` font-size: 50px;\`,
  medium: css\` font-size: 25px;\`,
  small: css\` font-size: 12px;\`,
}

const underlineTextStyle = css\`
  font-style: italic;
  text-decoration: underline;
\`

const specialTextStyle = css\`
  color: #ee45a1;
\`

const Title = styled.h1\`
  font-family: 'Menlo', sans-serif;
  color: \${props => props.red ? "#f00" : "#666"};
  \${props => props.variant && variants[props.variant] || variants['default']}
  \${props => props.underline && underlineTextStyle}
  \${props => props.special && specialTextStyle}
\`

render(
  <div>
    <Title underline variant="big">Title</Title>
    <Title special variant="small">Title</Title>
    <Title variant="xsmall">Title</Title>
  </div>
)
`

export default () => (  
  <Template
    section="Working with Styled Components"
    title="Conditioning styles"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>No Object.assign no deepClone</Text>
  </Template>
)
