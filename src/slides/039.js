import React from 'react'
import {
  Template
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `// components testing dependencies, should be ordered this way only
import { styleSheet } from 'styled-components'
import '../../scripts/tests/jsdom'
import { React, mount, shallow, expect, sinon, styles, helper } from '../../scripts/tests'

...

expect(cssrule).to.have.string('color: #edf9fe')
`

export default () => (
  <Template
    section="Testing Styled Components"
    title="Our workaround for asserting styles using enzyme"
  >
    <LiveCode
      justEditor
      code={components}
    />
  </Template>
)
