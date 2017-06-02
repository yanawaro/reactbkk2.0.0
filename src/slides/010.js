import React from 'react'
import {
  Template,
  Text,
  Flex
} from '../Theme' 
import LiveCode from '../LiveCode'

const contexted = `.contexted {
  a {}
  .menu {}
}`

const bem = `.block {}
.block__element {}
.block--modifier {}`

const rscss = `.component {
  >.element {}
  &.-variant {}
}`

export default () => (  
  <Template
    section="UI framework:styleguide building"
    title="Scope css methodlogies"
  >
    <Flex center wrap>
      <Flex column medhozgap>
        <Text auto smvergap>Contexted</Text>
        <LiveCode
          justEditor
          code={contexted}
        />
      </Flex>
      <Flex column medhozgap>
        <Text auto smvergap>BEM</Text>
        <LiveCode
          justEditor
          code={bem}
        />
      </Flex>
      <Flex column medhozgap>
        <Text auto smvergap>RSCSS</Text>
        <LiveCode
          justEditor
          code={rscss}
        />
      </Flex>
    </Flex>
  </Template>
)
