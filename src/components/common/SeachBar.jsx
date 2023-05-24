import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchIcon, CrossIcon } from '../icons'

export default function SeachBar() {
    const [query, setQuery] = useState("");
    return (
        <Wrapper>
            <SearchIcon />
            <Input value={query} placeholder='search...' onChange={(e) => {
                setQuery(e.target.value)
            }}></Input>
            {
                query ? <CrossBtn onClick={() => {
                    setQuery("")
                }}>
                    <CrossIcon />
                </CrossBtn> : null
            }

        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.background};
    border-radius: 8px;
    display:grid;
    grid-template-columns:auto 1fr auto;
    align-items:center;
    padding:6px 10px;
    gap:6px;

    
`
const Input = styled.input`
    background:none;
    border:none;
    outline:none;
    height:100%;
`

const CrossBtn = styled.button`
    display:grid;
    place-items:center;
    svg{
        width:20px;
        height:20px;  
    }        
`

