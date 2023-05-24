import React from 'react'
import styled from 'styled-components'
 
export default function Avatar() {
return (
    <Wrapper>
        <Img src="https://sportshub.cbsistatic.com/i/2021/03/18/af25876e-3cee-481e-8829-8ce1559f6fc6/naruto-kakashi-cosplay-1253110.jpg">
        </Img>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width:50px;
    height:50px;
    border-radius: 50%;
    border:1.5px solid deeppink;
    padding:2px;
`

const Img = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius: 50%;
`

