import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `() => (
  <DropdownContainer>
    <DropdownButton onClick={this.handleClick}>
      {this.props.displayText}
      {this.props.isCaret && <Caret/>}
    </DropdownButton>
    <VisibilityToggle
      isOpen={isOpen}
    >
      <Menu ref="dropdownMenu"/>
    </VisibilityToggle>
  </DropdownContainer>
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
    <Text auto smvergap>Code are more cleaned</Text>
    <Text auto smvergap>Controllable + Encapsulate platform code (HTML, CSS) output</Text>
    <Text auto smvergap>Design own set of tags/language more easily</Text>
    <Text auto smvergap>Developers don't need to think in HTML anymore</Text>
  </Template>
)
