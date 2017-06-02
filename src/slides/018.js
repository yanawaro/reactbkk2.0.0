import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const Card = styled.div\`
  margin: 8px 0;
  padding: 20px 12px;
  color: #666;
  background-color: #fff;
  border: 1px solid #aaa;
  box-shadow: 0 2px 8px 0 #999;
  border-radius: 4px;
\`

render(
  <Card>Card with style!</Card>
)
`

export default () => (  
  <Template
    section="Styled Components Basics"
    title="Constructing a Styled Component"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>Tagged template literals.</Text>
    <Text auto smvergap>Similiar to Sass, all css feature is supported.</Text>
    <Text auto smvergap>Building a component which renders what with what style.</Text>
    <Text auto smvergap>Don't omit semi-colons (2.0)</Text>
  </Template>
)
