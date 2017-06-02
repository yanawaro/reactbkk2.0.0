import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `
//import { injectGlobal } from 'styled-components'

injectGlobal\`
  // body { width: 50%; }
  .giTYCY { display: none; }
\`

render()
`

export default () => (  
  <Template
    section="Working with Styled Components"
    title="The { injectGlobal } api"
  >
    <LiveCode
      code={components}
    />
    <Text auto smvergap>Web only!</Text>
  </Template>
)
