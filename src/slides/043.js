import React from 'react'
import {
  Template,
  Image,
  LinkText
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `//yarn add --dev jest-styled-components
import 'jest-styled-components'

expect(tree).toMatchStyledComponentsSnapshot()
expect(tree).toHaveStyleRule('property', value)
`

export default () => (
  <Template
    section="Testing Styled Components"
    title="New helper for testing"
  >
    <LiveCode
      justEditor
      code={components}
    />
    <Image 
      src='https://github.com/styled-components/jest-styled-components/raw/master/assets/toMatchStyledComponentsSnapshot.png'
      maxWidth={'500px'}
    />
    <LinkText auto smvergap
      href="https://github.com/styled-components/jest-styled-components"
      target="_blank"
      >https://github.com/styled-components/jest-styled-components
    </LinkText>
  </Template>
)
