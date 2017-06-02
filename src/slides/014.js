import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const classes = `<h1 class="title -xl">Website title</h1>
<a href="/link" class="link">link</a>
`

const components = `const TitleXL = styled.h1\`
  color: #888;
  font-size: 60px;
\`

const ButtonLink = styled.a\`
  &:hover { color: #333; }
\`

<TitleXL>Website title</TitleXL>
<ButtonLink>link</ButtonLink>
`

export default () => (  
  <Template
    section="Styled Components Intro"
    title="Came across Styled Components again"
  >
    <Text auto smvergap>+Rebass base component mindset.</Text>
    <Text auto smvergap>We could make this</Text>
    <LiveCode
      justEditor
      code={classes}
    />
    <Text auto smvergap>Into this</Text>
    <LiveCode
      justEditor
      code={components}
    />
    <Text auto smvergap>No more classnames!</Text>
  </Template>
)
