import React from 'react'
import {
  Template,
  Text,
  Image
} from '../Theme' 
import LiveCode from '../LiveCode'

const css = `.btn {
  margin-bottom: $_margin-bottom;
  border-color: $border;
  border-style: solid;
  border-width: $_btn-border-width;
  background-color: $background;
  color: $color;
  &.-primary { ... }
  &.-success { ... }
  &.-link { ... }`

export default () => (  
  <Template
    section="UI framework:styleguide building"
    title="Base styles implementation"
  >
    <Image
      src="http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
      auto smvergap
      maxWidth={'250px'}
    />
    <Text auto smvergap>Sass guildines</Text>
    <LiveCode
      justEditor
      code={css}
    />
    <Text auto smvergap>Everything has a css classname.</Text>
  </Template>
)
