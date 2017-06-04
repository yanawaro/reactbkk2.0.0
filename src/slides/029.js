import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const margin = css\`
  \${props => props.auto && 'margin: auto;'}
  \${props => props.biggap && 'margin: 64px auto;'}
\`

const textStyle = css\`
  \${margin};
  font-family: 'Menlo', sans-serif;
  color: #666;
\`

const underlineTextStyle = css\`
  font-style: italic;
  text-decoration: underline;
\`

const specialTextStyle = css\`
  color: #ee45a1;
\`

const Title = styled.h1\`
  \${margin}
  \${textStyle}
  \${props => props.underline && underlineTextStyle}
  \${props => props.special && specialTextStyle}
\`

render(
  <div>
    <Title underline>Special Title</Title>
    <Title special biggap>Special Title</Title>
    <Title underline special>Special Title</Title>
  </div>
)
`

export default () => (  
  <Template
    section="Working with Styled Components"
    title="Combining styles"
  >
    <LiveCode
      code={components}
    />
    <Text auto medvergap>Easier than using css as js object!</Text>
  </Template>
)
