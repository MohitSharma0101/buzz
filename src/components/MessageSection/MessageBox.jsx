import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { ArrowUpIcon, AttachmentIcon, EmojiIcon } from '../icons'
import EmojiPicker from '../common/EmojiPicker';



function makeRezise(event) {
  const input = event.target;
  input.style.height = "auto";
  input.style.height = input.scrollHeight + "px";
}

function getEmojiPicker(onEmojiSelect) {
  try{
  return <EmojiPicker  onEmojiSelect={onEmojiSelect} />
  }catch{
    return null;
  }
}

export default function MessageBox({onNewMsg}) {
  const [isEmpty, setisEmpty] = useState(true)

  const [value,setValue] = useState("")

  function onTextChange(e) {
    makeRezise(e)
    if (e.target.value) {
      setisEmpty(false)
    } else {
      setisEmpty(true)
    }
    setValue(e.target.value)
  }

  function onSend(e){
      if(!value) return;
      onNewMsg(value)
      setValue("")
      setisEmpty(true)
      e.target.style.height = "auto";
  }

  function onKeyUp(e){
    if (e.key === "Enter" && e.shiftKey) {
      onSend(e)
    }
  }

  function onEmojiSelect(data){
    const emoji = data.native;
    setValue(value + emoji)
    setisEmpty(false)
  }

  return (
    <Wrapper>
      <SendBtn isEmpty={isEmpty} onClick={onSend}>
        <ArrowUpIcon />
      </SendBtn>

      <Input value={value} rows={1} onChange={onTextChange} onKeyUp={onKeyUp} placeholder="Your Message..." />

      <AttachmentBtn >
        <AttachmentIcon />
      </AttachmentBtn>
      
      {getEmojiPicker(onEmojiSelect)}
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width: 100%;
    padding: 12px;
    display:flex;
    align-items: center;
    background:${props => props.theme.onSurface};
`

const AttachmentBtn = styled.button`
  svg{
    stroke:${props => props.theme.text};
  }
`
const Input = styled.textarea`
  padding:12px;
  width:100%;
  max-height:150px;
  resize:none;
  border: none;
  text-align:start;
  background:none;
  color: ${props => props.theme.text};
  &:focus{
    outline:none;
  }
`

const up = keyframes`
  0%{
    transform:translatey(100%);
  }
  100%{
    transform:translatey(0%);
  }
`

const SendBtn = styled.button`
  display: flex;
  flex-direction: column;
  &:after{
    color: ${props => props.isEmpty ? "" : props.theme.primaryColor};
    display: ${props => props.isEmpty ? "none" : "block"};
    content: "Send";
    animation: ${up} .2s ease-in-out forwards;
  }
  
  circle{
    stroke: ${props => props.isEmpty ? "" : props.theme.primaryColor};
  }
    svg{
      fill: ${props => props.isEmpty ? "" : props.theme.primaryColor};
      stroke:  ${props => props.isEmpty ? "" : props.theme.background};
    }
`
