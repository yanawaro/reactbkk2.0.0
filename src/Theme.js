import React from 'react'
import { ContentSlide } from 'react-presents'
import styled, { css, injectGlobal } from 'styled-components'

injectGlobal`
  .giTYCY { display: none; }
`

const ThemedContext = styled(ContentSlide)`
  background: #263238;
  overflow: hidden;
  ${props => props.featured && `
    display: flex;
    flex-direction: column;
    > h1 { padding-right : 0; }
  `}
`

const TextColor = 'rgba(170, 187, 195, 1.0)'

const Topless = css`
  margin-top: 8px;
`

const BottomLess = css`
  margin-bottom: 12px;
`

const Gapless  = css`
  margin-top: 0;
  margin-bottom: 8px;
`

const TextStyle = css`
  font-family: 'Menlo', sans-serif;
  color: ${TextColor};
`

const Margin = css`
  ${props => props.auto && `margin: auto;`}
  ${props => props.topless && Topless}
  ${props => props.bottomless && BottomLess}
  ${props => props.gapless && Gapless}
  ${props => props.medvergap && `margin: 32px auto;`}
  ${props => props.medhozgap && `margin: auto 32px;`}
  ${props => props.smvergap && `margin: 16px auto;`}
  ${props => props.smhozgap && `margin: auto 16px;`}
`

const Title = styled.h1`
  ${Margin}
  ${TextStyle}
`

const Subtitle = styled.h3`
  ${Margin}
  ${TextStyle}
`

const Text = styled.p`
  ${Margin}
  ${TextStyle}
  font-size: 24px;
`

const LinkText = styled.a`
  ${Margin}
  ${TextStyle}
  display: block;
  text-decoration: underline;
`

const Image = styled.img`
  ${Margin}
  ${props => props.maxWidth && `max-width:${props.maxWidth};`}
`

const ProfileImg = styled(Image)`
  max-width: 200px;
  border-radius: 50%;
  border: 4px solid ${TextColor}; 
`

const Flex = styled.div`
  ${Margin}
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
`

const Template = (props) => (
  <ThemedContext featured>
    <Subtitle auto gapless medvergap>{props.section}</Subtitle>
    <Title auto gapless>{props.title}</Title>
    <Flex column auto>
      {props.children}
    </Flex>
  </ThemedContext>
)

export {
  TextColor,
  Margin,
  ThemedContext,
  Title,
  Subtitle,
  Text,
  LinkText,
  Image,
  ProfileImg,
  Flex,
  Template
}
