import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const Link = styled.a\`
  color: inherit;
  text-decoration: none;
  &:hover, &:active {
    text-decoration: underline;
  }
\`

const P = styled.p\`
  \${ Link } {
    text-decoration: underline;
  }
\`

render(
  <div>
    <Link href="/links">Link</Link>
    <P>
      <Link href="/links">Link</Link>
    </P>
  </div>
)`

export default () => (  
  <Template
    section="Working with Styled Components"
    title="Contextual Overrides (2.0)"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>A bit more likely css pattern, if needed.</Text>
  </Template>
)
