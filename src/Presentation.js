import React from 'react'
import { Presentation, Slide } from 'react-presents'

const slides = require.context('./slides', false, /\.js$/)
  .keys()
  .map((filename) => filename.replace('./', './slides/'))
  .map((path) => require(`${path}`).default)

export default () => (
  <Presentation>
    {slides.map((component, index) => (
      <Slide
        component={component}
        key={index}
      />
    ))}
  </Presentation>
)
