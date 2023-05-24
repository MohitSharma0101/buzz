import React, { useEffect } from 'react'
import { useRef } from 'react';
import styled from 'styled-components'
import { onFallback } from '../Utils';


export default function MessageList({ list , chat }) {
    const listRef = useRef(null);
    useEffect(() => {
        listRef.current?.scrollIntoView({behavior: 'smooth'});
      }, [list]);
    return (
        <Wrapper >
            {
                list.map((msgData) => (
                    <MsgWrapper isMe={msgData.senderId == chat.id} key={msgData.msgId}>
                        <div>
                            <ProfilePic src={chat.profilePic} onError={onFallback}/>
                            <Time>{msgData.time}</Time>
                        </div>
                        <Msg isMe={msgData.senderId == chat.id}>{msgData.msg}</Msg>
                    </MsgWrapper>
                ))
            }
            <div ref={listRef} />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    padding: 24px;
    overflow:scroll;
    
`

const MsgWrapper = styled.div`
    width:fit-content;
    height:fit-content;
    display:flex;
    gap:12px;
    flex-direction:${props => props.isMe ? 'row-reverse' : 'revert'};
    align-self:${props => props.isMe ? 'end' : 'start'};
`

const ProfilePic = styled.img`
    background: deeppink;
    width: 50px;
    height: 50px;
    border-radius:50%;
    object-fit:cover;
`

const Time = styled.div`
    padding: 0 4px;
    font-size:12px;
    right:-24px;
`
const Msg = styled.div`
    --mymsg: 12px 12px 0 12px;
    --other: 12px 12px 12px 0;
    background-color: white;
    padding: 12px 24px;
    width:min-content;
    height:min-content;
    border-radius: ${props => props.isMe ? "var(--mymsg)" : "var(--other)"};
`
