import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const Text = styled.div\`
  color: #6c7172;
  font-size: 28px;
\`

const TextBold = styled(Text)\`
  font-weight: bold;
\`

const Link = (props) => (
  <a className={props.className} href="#">Link</a>
)

const LinkWithStyle = styled(Link)\`
  color: #4fb4e7;
\`

render(
  <div>
    <Text>Text normal</Text>
    <TextBold>Text bold</TextBold>
    <Link>Link</Link>
    <LinkWithStyle>LinkWithStyle</LinkWithStyle>
  </div>
)
`

export default () => (  
  <Template
    section="Styled Components Basics"
    title="Overriding other components styles"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>Have classname props, 2 classnames generated, Sometimes wrong ordering happens!</Text>
  </Template>
)
