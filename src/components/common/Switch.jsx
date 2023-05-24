import React from 'react'
import styled from 'styled-components'
import useSound from 'use-sound'
import click from '../../sounds/switchClick.mp3'

export default function Switch({onSwitch}) {
  const [sound] = useSound(click)
  
    return (
        <Wrapper >
            <Input id='switch' type='checkbox' onChange={()=>{
              sound()
              onSwitch()
              
              }}/>
            <Label htmlFor='switch'>
                <Thumb />
            </Label>
        </Wrapper>
    )
}
const Wrapper = styled.button`
    --lightBackground: #fdb813;
    --darkBackground:#0378F9;
    --lightThumb: white;
    --darkThumb: white;
    --width: 48px;
    --thumb:18px;
    border:none;
    background:none;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Label = styled.label`
    box-sizing:revert;
    padding: 6px;
    width: var(--width);
    background-color: var(--lightBackground);
    border-radius: 35px;
    cursor: pointer;
    transition: all 0.2s;
`
const Thumb = styled.div`
  width: var(--thumb);
  height: var(--thumb);
  border-radius: 50%;
  transition: all 0.2s;

  &::after {
    content: "";
    display: none;
    background-color: var(--darkBackground);
    width: calc(var(--thumb) - 5px);
    height: calc(var(--thumb) - 5px);
    position: absolute;
    border-radius: 50%;
  }
`


const Input = styled.input`
  display: none;

  &:checked ~ label {
    background-color: var(--darkBackground);
  }

  &:checked ~ ${Label} ${Thumb} {
    transform: translateX(calc(var(--width) - var(--thumb) ));
    background-color: var(--darkThumb);
  }

  &:checked ~ ${Label} ${Thumb}::after {
    display: inline-block;
  }

  :not(&:checked) ~ ${Label} ${Thumb} {
    transform: translateX(0%);
    background-color: var(--lightThumb);
  }
`

