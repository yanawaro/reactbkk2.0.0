import React from 'react'
import {
  Template
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const sheet = new ServerStyleSheet()
const html = renderToString(
  <StyleSheetManager sheet={sheet.instance}>
    <YourApp />
  </StyleSheetManager>
)

const css = sheet.getStyleTags() // or sheet.getStyleElement()`

export default () => (
  <Template
    section="Testing Styled Components"
    title="Using SSR to get style rules (2.0)"
  >
    <LiveCode
      justEditor
      code={components}
    />
  </Template>
)
