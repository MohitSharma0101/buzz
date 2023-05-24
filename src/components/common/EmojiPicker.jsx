import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { EmojiIcon } from '../icons'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export default function EmojiPicker({onEmojiSelect}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggle(){
        setIsOpen(!isOpen);
    }
    return (
        <Wrapper>
            <EmojiBtn isOpen={isOpen} onClick={toggle}>
                <EmojiIcon />
            </EmojiBtn>
            {
                isOpen ? (
                    <EmojiList open={isOpen}>
                        <Picker  dynamicWidth={true} data={data} onEmojiSelect={ onEmojiSelect } style={{
                            width:"800px"
                        }} />
                    </EmojiList>
                ) : null
            }
        </Wrapper>
    )
}
const Wrapper = styled.div`
    position:relative; 
`

const EmojiBtn = styled.button`

    svg{
        stroke: ${props => props.isOpen ? props.theme.primaryColor : ""};
    }
  
`

const scaleUp = keyframes`
    0%{
        transform:scale(0) translatey(0%);
    }
    100% {
        transform:scale(1) translatey(-100%);;
    }
`

const scaleDown = keyframes`
    0% {
        transform:scale(1) translatey(-100%);;
    }
    100% {
        transform:scale(0) translatey(0%);
    }
`


const EmojiList = styled.div`
    position:absolute;
    right:0;
    top:0;
    transform-origin: 100% 50%;
    animation:${props => props.open ? scaleUp : scaleDown} .2s ease forwards ;
`
