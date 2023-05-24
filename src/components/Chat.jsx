import React from 'react'
import styled from 'styled-components'
import MovingDots from './common/MovingDots';
import { useAppContext } from './context/context';
import { DoubleTickIcon } from './icons'
import { onFallback } from './Utils';

function getMsgStatus(isTyping,unread,seen){
    if(isTyping){
        return null;
    }else if(unread){
        return <Unread>{
            unread<=9? unread : "9+"
            }</Unread>
    }else{
        return( 
        <DoubleTick read={seen} >
            <DoubleTickIcon />
        </DoubleTick>
        )
    }
}

export default function Chat({
    id,
    name,
    profilePic,
    lastMsg,
    time,
    seen,
    isTyping,
    online,
    unread,
    ...attrs
  }) {
    
    const app = useAppContext()


    function OnWrapperClick(){
        app.currentChat.setCurrId(id);
    }   



    return (
        <Wrapper onClick={OnWrapperClick} {...attrs}>
            <ProfilePic active={online}>
                <img src={profilePic} alt={"profile pic"} onError={onFallback} /> 
            </ProfilePic>
            <Name>{name}</Name>
            <Message typing ={isTyping}>
                { isTyping ? <MovingDots /> : null}
                { isTyping ? "typing" : lastMsg }
            </Message>
            {getMsgStatus(isTyping,unread,seen)}
            <TimeStamp>{time}</TimeStamp>
        </Wrapper>
    )
}



const Wrapper = styled.div`
    min-width:250px;
    display:grid;
    grid-template-columns: 50px 1fr auto;
    grid-template-rows: auto auto;
    grid-template-areas: 
    'side name count'
    'side msg time'; 
    margin:10px 0;
    padding:10px;
    align-items:center;
    column-gap:10px;
    cursor:pointer;
    border-bottom:1px solid ${props => props.theme.borderColor};
    color: ${props => props.theme.text};

    &:last-child{
        border-bottom:none;
    }
    
`

const ProfilePic = styled.picture`
    grid-area:side;
    position:relative;
    width:50px;
    height:50px;

    img{
        width:inherit;
        height:inherit;
        border-radius:50%;
        background-color:deeppink;
        object-fit:cover;
    }
    
    &:after{
        content: "";
        display:block;
        width:12px;
        height:12px;
        position:absolute;
        background-color:${props =>  props.active? props.theme.green : props.theme.gray};
        bottom:0px;
        right:0px;
        border-radius:50%;
        border:2px solid ${props => props.theme.background};
    }

`

const Name = styled.div`
    grid-area:name;
    font-size:18px;
    font-weight:400;
    align-self:start;
`

const Message = styled.div`
    grid-area: msg;
    font-size:14px;
    align-self:start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display:flex;
    gap:4px;
    color: ${props => props.typing ? props.theme.primaryColor :  props.theme.secondaryText};

  
`

const Unread = styled.div`
    grid-area: count;
    font-size:12px;
    background-color:red;
    color:white;
    border-radius:50%;
    width:22px;
    height:22px;
    display:grid;
    place-items:center;
    justify-self:end;
`

const TimeStamp = styled.div`
    grid-area: time;
    font-size:12px;
    color: ${props => props.theme.lessFocusedText};
`

const DoubleTick = styled.div`
    justify-self:end;
    svg{
        width:18px;
        height:18px;
        --seen: ${props => props.theme.primaryColor};
        stroke: ${props => props.read ? "var(--seen)" : ""};

      
    }
`