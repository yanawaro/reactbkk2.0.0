import React from 'react'
import {
  Template
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `
//style test helper

const getGeneratedClassName = (node) => {
  if (node.length === 1) return node.getNode().state.generatedClassName
  return node.node.state.generatedClassName
}

const getStyleRule = (styleSheet, className) => {
  const rules = styleSheet.styleSheet.sheet.cssRules
  const rule = _.find(rules, (rule) => { return rule.cssText.match(className) })
  return rule.cssText
}
  
...

import { styleSheet } from 'styled-components'

//display name or component class
const BackBar = styles.getGeneratedClassName(wrapper.find('BackBar')) //hased classname

const BackBarRule = styles.getStyleRule(styleSheet, BackBar)
expect(BackBarRule).to.have.string('color: #edf9fe')

...
`

export default () => (
  <Template
    section="Testing Styled Components"
    title="Selecting Styled Components"
  >
    <LiveCode
      justEditor
      code={components}
    />
  </Template>
)
