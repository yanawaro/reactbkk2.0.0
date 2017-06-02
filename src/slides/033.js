import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const components = `const Context = styled.div\`
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;

  a {
    -webkit-text-decoration-skip: objects;
  }
  
  a:active,
  a:hover {
    outline-width: 0;
  }
  
  a,
  button,
  input,
  select,
  textarea {
    touch-action: manipulation;
  }
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
\`
`

export default () => (  
  <Template
    section="Working with Styled Components"
    title="Resets? Contructing your context"
  >
    <LiveCode
      justEditor
      code={components}
    />
    <Text auto smvergap>Your app wrapper</Text>
  </Template>
)
