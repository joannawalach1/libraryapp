import React from 'react';
import styled from 'styled-components';
import HeaderImg from './../img/header.jpg';

const MainDiv = styled.div `

`

const Heading = styled.h2`
position = absolute;
`

const Image = styled.img`
width: 100%;
height: 50vh;
`

const InputDiv = styled.div`
position: absolute;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 50vh;
`
const Input = styled.input `
width: 60%;
height: 2rem;
border:0;
outline: 0;
`

const Button = styled.button`
background-color: red;
color: white;
border: 0;
outline: 0;
height: 2.1rem;
`

function Header() {
    return (
        <MainDiv>
            <Heading>Library App</Heading>
            <InputDiv>
            <Input />
            <Button>Text</Button>
            </InputDiv>
            <Image src={HeaderImg} alt="header" />
        </MainDiv>

 
            

    )
}

export default Header
