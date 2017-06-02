import React from 'react'
import {
  Template,
  Text
} from '../Theme' 
import LiveCode from '../LiveCode'

const css = `.root { display: none;}
.-show { display: block;}
.content {}

render() {
  
  let rootClasses = cx(
      'root',
      { '-show':  show }
    )
    
  <div className={rootClasses}>
    <div className={styles.content}></div>
  </div>
}
`

const modules = `<div class="modal__root__35QW2 modal__-show_9RT8S">
  <div class="modal__content__KM84D"></div>
</div>
`

export default () => (
  <Template
    section="UI framework:styleguide building"
    title="CSS modules implementation"
  >
    <LiveCode
      justEditor
      code={css}
    />
    <Text auto medvergap>Ends up with code like this</Text>
    <LiveCode
      justEditor
      code={modules}
    />
  </Template>
)
