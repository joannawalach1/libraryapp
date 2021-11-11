import styled from 'styled-components';
import React from 'react';
import HeaderImg from './../img/header.jpg';

const MainDiv = styled.div `
margin-left: auto;
margin-right: auto;
`
const Image = styled.img`
width: 100%;
height: 50vh;
`
const Input = styled.input`
width: 100vh;
height: 5vh;
position: absolute;
top: 30vh;
left: 5vh;
z-Index: 1;
`

function Header() {
    return (
        <MainDiv>
            <Input />
            <Image src={HeaderImg} alt="header"/>
            
        </MainDiv>
    )
}

export default Header
