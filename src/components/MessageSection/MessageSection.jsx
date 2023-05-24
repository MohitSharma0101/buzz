import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/context'
import { onFallback } from '../Utils';
import MessageBox from './MessageBox';
import MessageList from './MessageList';


const messages = [
  {
    msgId: "sdcas",
    senderId: 1,
    time: "5:00 pm",
    msg: "hiii"
  },
  {
    msgId: "sdcscacas",
    senderId: 1,
    time: "5:01 pm",
    msg: "cjkasbcjks"
  },
  {
    msgId: "sdsfccas",
    senderId: 1,
    time: "5:20 pm",
    msg: "hsdcabksjiii"
  },
  {
    msgId: "sdscdcsccas",
    senderId: 1,
    time: "5:25 pm",
    msg: "acsdhjcbas"
  },
  {
    msgId: "sdsdcas",
    senderId: 1,
    time: "5:26 pm",
    msg: "hisjdhbcjkasii"
  },
]


export default function MessageSection() {

  const app = useAppContext();
  const [chat , _] = app.activeChat;
  const [list, setList] = useState(messages)
  const [isProfileOpen,setisProfileOpen] = app.isProfile;

  function toggleProfile(){
    if(isProfileOpen == 'hide' || isProfileOpen == 'close')
      setisProfileOpen('open')
    else 
      setisProfileOpen('close')
  }

  const onNewMsg = (message) => {
    const date = new Date();
    const newMsg = {
      msgId: Math.random(),
      senderId: chat.id,
      time: date.toLocaleTimeString('en-US', { hour12: true, hour: "2-digit", minute: "2-digit" }),
      msg: message,
    }
    setList([...list, newMsg])
  }

  return (
    <Wrapper>
      <BackDrop onClick={toggleProfile}>
        <ProfilePic src={chat.profilePic} onError={onFallback}/>
        <Name>{chat.name}</Name>
        <OnlineStatus>{
          (chat.online) ? 'Online' : 'Offline'
        }</OnlineStatus>
      </BackDrop>
      <MessageList list={list} chat={chat} />
      <MessageBox onNewMsg={onNewMsg} />
    </Wrapper>
  )
}



const Wrapper = styled.div`
background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
height:100vh;
width:100%;
display:grid;
grid-template-rows: auto 1fr auto auto;
`

const BackDrop = styled.div`
  width:100%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(35px);
  padding: 18px 0;
  padding-left:34px;
  display:grid;
  grid-template-areas:
  "pic name"
  "pic status";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap:14px;
  cursor:pointer;
`

const ProfilePic = styled.img`
  grid-area:pic;
  width:50px;
  height:50px;
  background-color:deeppink;
  border-radius:50%;
  object-fit:cover;
`

const Name = styled.h4`
  grid-area:name;
  margin:0;
  font-weight:bold;
`

const OnlineStatus = styled.p`
  grid-area:status;
  margin:0;
  font-weight:400;
  font-size:14px;
`