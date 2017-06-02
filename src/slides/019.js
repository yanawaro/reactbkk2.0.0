import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const ButtonLink = styled.a\`
  margin: 8px 4px;
  padding: 12px 20px;
  color: \${props => props.primary ? '#4fb4e7' : '#6c7172' };
  background-color: \${props => props.primary ? '#c0eefe' : '#fff' };
  border: 1px solid \${props => props.primary ? '#4fb4e7' : '#6c7172' };
  box-shadow: 0 2px 8px 0 #ddd;
  border-radius: 4px;
\`

render(
  <div>
    <ButtonLink href="/mylink">Link</ButtonLink>
    <ButtonLink primary href="/mylink">Link</ButtonLink>
  </div>
)
`

export default () => (  
  <Template
    section="Styled Components Basics"
    title="Dynamically thru props"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>Passes native attributes.</Text>
    <Text auto smvergap>Generate its own hash classnames.</Text>
    <Text auto smvergap>Inject styles on time, autoprefixed.</Text>
  </Template>
)
