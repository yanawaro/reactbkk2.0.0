import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const Wrapper = styled.div\`
  font-size: 18px;
  .card {
    padding: 24px;
    border: 1px solid #888;
  }
  .link { 
    color: #4fb4e7;
    &:hover {
      color: #c0eefe;
    }
  }
\`

render(
  <Wrapper>
    <div className="card">
      <a className="link" href="/">Go to site</a>
    </div>
  </Wrapper>
)
`

export default () => (  
  <Template
    section="Styled Components Basics"
    title="Back to good old css!"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>Styling injected HTML</Text>
  </Template>
)
