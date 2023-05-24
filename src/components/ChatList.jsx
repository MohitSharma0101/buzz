import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Chat } from './';
import SeachBar from './common/SeachBar';
import { useAppContext } from './context/context';
import { LeftArrowIcon } from './icons'


export default function ChatList() {
  const [isClose, setisClose] = useState(false);
  const app = useAppContext();
  const [activeChat, setActiveChat] = app.activeChat;
  function togglePanel() {
    setisClose(!isClose)
  }

  return (
    <Wrapper close={isClose}>
      <CloseIcon close={isClose} onClick={togglePanel}>
        <LeftArrowIcon />
      </CloseIcon>
      {
        isClose ? null
          :
          <Container>
            <Title>Message</Title>
            <SeachBar />
            <Chats>
              {app.chats.map((chat) => (
                <Chat onClick={() => {
                  setActiveChat(chat)
                }} key={chat.id} {...chat} />
              ))}
            </Chats>

          </Container>
      }

    </Wrapper>
  )
}
const Wrapper = styled.div`
  width:${props => props.close ? "30px" : "400px"};
  height:100%;
  background-color:${props => props.theme.onSurface};
  position:relative;
  padding:8px;
  transition:width .4s;
  border-right: 1px solid ${props => props.theme.borderColor};
`

const CloseIcon = styled.button`
  background-color:${props => props.theme.background};
  width:50px;
  height:50px;
  display:grid;
  place-items:center;
  border-radius:50%;
  position:absolute;
  right:-25px;
  margin:10px 0;
  cursor:pointer;
  transform:${props => props.close ? "rotate(180deg)" : ""};
  transition:transform .4s;
  border:none;
  z-index:1;
  
  svg{
    stroke:${props => props.theme.text};
  }
`
const Title = styled.h3`
  color:${props => props.theme.text};

`

const Container = styled.div`
  overflow:hidden;
  padding:0 8px;
`

const Chats = styled.div`
  margin-top:24px;
`



