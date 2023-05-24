import React from "react";
import chats from "../../data/chats";


export const Context = React.createContext();



export function useAppContext(){
    return React.useContext(Context)
}

export default function AppContext({children}){
    const [id,setCurrId] = React.useState(1)
    const [isProfileOpen , setisProfileOpen] = React.useState("hide")
    const [activeChat,setActiveChat] = React.useState(chats[0])

    return (
        <Context.Provider value={{
            chats: chats,
            currentChat: {id,setCurrId}, 
            activeChat: [activeChat,setActiveChat],
            isProfile: [isProfileOpen , setisProfileOpen],
        }}>
            {children}
        </Context.Provider>
    )
}
