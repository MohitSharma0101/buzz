import styled, { keyframes } from 'styled-components';
import { Sidebar, ChatList } from './components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import React, { useState } from 'react';
import { darkTheme, lightTheme } from './theme';
import MessageSection from './components/MessageSection/MessageSection';
import chats from './data/chats';
import AppContext, { useAppContext } from './components/context/context';
import ProfileSection from './components/ProfileSection/ProfileSection';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
  }

  button{
    cursor:pointer;
    border:none;
    background:none;

    &:has(svg){
      display:flex;
      justify-content:center;
      align-items:center;
    }
  }

  svg{
      stroke:${props => props.theme.text}
  }

  input{
    color: ${props => props.theme.text};
    border:none;
    background:none;
  }
`



function App() {
  const [isDarkTheme, setTheme] = useState(false);
  function toggleTheme() {
    setTheme(!isDarkTheme)
  }
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppContext >
        <AppWrapper toggleTheme={toggleTheme} />
      </AppContext>

      <GlobalStyle />
    </ThemeProvider>
  );
}

function AppWrapper({ toggleTheme }) {
  const [isProfileOpen,setisProfileOpen] = useAppContext().isProfile;
  return (
    <Wrapper isProfile={isProfileOpen}>
      <Sidebar toggleTheme={toggleTheme} />
      <ChatList />
      <MessageSection />
      <ProfileSection />
    </Wrapper>
  )
}

const slideIn = keyframes`
  0%{
    grid-template-columns: auto auto 1fr 0px;
  }
  
  100%{
    grid-template-columns: auto auto 1fr 350px;
  }
`
const slideOut = keyframes`
  0%{
    grid-template-columns: auto auto 1fr 350px;
  }
  
  100%{
    grid-template-columns: auto auto 1fr 0px;
  }
`

const Wrapper = styled.div`
  background-color: ${props => props.theme.background};
  height:100vh;
  display: grid;
  grid-template-columns: auto auto 1fr;
  animation: ${props=> getAnimation(props.isProfile)} .4s ease forwards;
`

function getAnimation(isProfile){
  if(isProfile == 'open') return slideIn;
  else if(isProfile == 'close') return slideOut;
  else return null;
}

export default App;
