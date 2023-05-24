import React from 'react'
import styled, { keyframes } from 'styled-components'
 
export default function MovingDots() {
return (
    <Wrapper>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:2px;
  margin: 0 2px;
`

const up = keyframes`
    0% {
        transform: translatey(0%);
    }
    100% {
        transform: translatey(100%);
    }
`
const scale = keyframes`
    0% {
        transform: scale(0.5);
    }
    100% {
        transform: scale(1.2);
    }
`

const Dot = styled.div`
  width:4px;
  height:4px;
  background-color: ${props => props.theme.primaryColor};
  border-radius:50%;
  animation: ${scale} .7s ease-in infinite alternate;
  
  &:nth-child(1){
    animation-delay: .2s;
  }
  &:nth-child(2){
    animation-delay: .3s;
  }
  &:nth-child(3){
    animation-delay: .5s;
  }
`
