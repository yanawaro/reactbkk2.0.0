import React from 'react'
import styled, { css, injectGlobal, ThemeProvider } from 'styled-components'
import {
  Flex
} from './Theme' 
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const CustomLiveProvider = styled(LiveProvider)`
  font-size: 20px;
`

const BlackFlex = styled(Flex)`
  background-color: #1D1F21;
`

const Previewer = styled.div`
  padding: 25px;
  width: 100%;
  background: #fff;
`

export default (props) => {
  return (<CustomLiveProvider 
    noInline
    code={props.code}
    scope={{
      styled,
      css,
      injectGlobal,
      ThemeProvider
    }}
  >
    <BlackFlex>
      <LiveEditor />
      {props.justEditor === undefined && (
        <Previewer>
          <LivePreview />
        </Previewer>
      )}
    </BlackFlex>
    {props.justEditor === undefined && <LiveError />}
  </CustomLiveProvider>)
}
