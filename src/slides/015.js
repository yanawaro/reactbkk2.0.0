import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `() => (
  <RootElement show={show}>
    <BackDrop />
    <Content>
      <Close link onClick={this.dismiss.bind(this)}>&times;</Close>
      {this.contentComponent}
    </Content>
  </RootElement>
)`

export default () => (  
  <Template
    section="Styled Components Intro"
    title="Implementing in style-components way"
  >
    <LiveCode
      justEditor
      code={components}
    />
    <Text auto smvergap>We are not returning actual doms</Text>
    <Text auto smvergap>Another layer built on top of native (HTML) easily</Text>
    <Text auto smvergap>Could lead to more cross platform components</Text>
  </Template>
)
