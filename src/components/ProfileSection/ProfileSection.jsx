import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/context';
import { CrossIcon, InfoIcon } from '../icons';
import { onFallback } from '../Utils';
 
export default function ProfileSection() {
  const [isProfileOpen,setisProfileOpen] = useAppContext().isProfile;
  const app = useAppContext();
  const [chat , _] = app.activeChat;

  function closeProfile(){
    setisProfileOpen('close');
  }

return (
    <Wrapper isProfile={isProfileOpen=='open'} >
      <Head>
        <InfoIcon />
        Info
        <CancelBtn onClick={closeProfile}>
          <CrossIcon />
        </CancelBtn>
      </Head>

      <Main>
        <ProfilePic  >
          <img src={chat.profilePic} onError={onFallback} />
        </ProfilePic>
        <Name>
          {chat.name}
          <Online online={chat.online}>{chat.online?"Online":"Offline"}</Online>
          <Status>"{"Hiii"}"</Status>
        </Name>


      </Main>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: ${props => props.isProfile ? "block" : "none"};
  min-width:300px;
  height:100%;
  background: ${props => props.theme.background};
  border-left: 1px solid ${props => props.theme.borderColor};
`

const Head = styled.div`
  display: grid;
  padding: 24px 12px;
  grid-template-columns: auto 1fr auto;
  column-gap:12px;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`

const CancelBtn = styled.button``

const Main = styled.div`
  padding:24px 12px;
  display:flex;
  flex-direction:column;
  align-items:center;
`
const ProfilePic = styled.picture`
  img{
    object-fit:cover;
    width: 100px;
    height: 100px;
    border-radius:50%;
    cursor:pointer;
  }

`

const Name = styled.h3`
  font-size: 20px;
  margin:18px 0;
  text-align:center;
`
const Online = styled.div`
  font-size:16px;
  font-weight:300;
  margin: 4px 0;

  &:after{
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 0 4px;
    background-color:${props => props.online? props.theme.green : props.theme.gray};
  }
`

const Status = styled.div`
  font-size: 16px;
`