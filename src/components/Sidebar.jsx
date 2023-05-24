import React, { useState } from 'react'
import styled from 'styled-components'
import useSound from 'use-sound';
import Avatar from './common/Avatar'
import Switch from './common/Switch';
import {GroupIcon, BookMarkIcon, ChatIcon, PhoneIcon } from './icons'
import slide from "../sounds/slide.mp3"

const tabs = [
    <ChatIcon />,
    <BookMarkIcon />,
    <PhoneIcon />,
    <GroupIcon />
];

export default function Sidebar({toggleTheme}) {
    const [active, setActive] = useState(0);
    const [playSlideSound] = useSound(slide,{volume:0.1})
    function isActive(ind) {
        return active === ind;
    }
    return (
            <Wrapper  >
                    <Logo />
                    <Tabs>
                        {
                            tabs.map((tab, index) => (
                                <TabIcon key={index} active={isActive(index)} onClick={() => {
                                    playSlideSound()
                                    setActive(index)
                                }} >
                                    {tab}
                                </TabIcon>
                            ))}
                        <Glider index={active} />
                    </Tabs>
                <Switch onSwitch={toggleTheme} />
                <ProfilePic>
                    <Avatar />
                </ProfilePic>
            </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 100px;
    min-width:100px;
    max-width:200px;
    padding:24px 0;
    height:100%;
    background-color:${props=>props.theme.onSurface};
    border-right:1px solid ${props => props.theme.borderColor};
    display:grid;
    grid-template-rows:auto 1fr auto auto;
    justify-items:center;
    align-content:center;
    gap:32px;
    align-items:center;
    z-index:1;

`



const Logo = styled.div`
    width: 30px;
    height:30px;
    border: 1px solid ${props=>props.theme.text};
`

const ProfilePic = styled.div`
    position:relative;
`

const Tabs = styled.div`
    --gap:10px;
    width:100%;
    display:flex;
    flex-direction:column;
    position:relative;
    gap:var(--gap);
`

const TabIcon = styled.button`
    width:100%; 
    height:50px;
    padding:8px;
    display:flex;
    justify-content:center;
    background:none;
    background-color: ${props => props.active ? props.theme.secondaryColor : ""};
    transition:all .3s ease-in-out;
    cursor:pointer;
    border:none;

    svg{
        stroke: ${props => props.active ? props.theme.primaryColor : props.theme.text};
        stroke-width:1.7px;
    }   
`

const Glider = styled.div`
    --index:${props => props.index | 0 };
    width:4px;
    height:50px;
    background-color:${props=>props.theme.primaryColor};
    position:absolute;
    right:0;
    transform:translatey(0%);
    transform:translatey(calc(var(--index) * ( 100% + var(--gap) ) ));
    transition:all .3s ease-in-out;
`