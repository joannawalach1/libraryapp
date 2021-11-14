import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeaderImg from './../img/header.jpg';
import axios from 'axios';

const Header = styled.div `
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

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width:100%;
justify-content:center;
padding: 20px;
`

const Card = styled.div`
width: 10rem;
padding: 40px;
`

function App () {
const [searchInput, setSearchInput] = useState('');
const [books, setBooks] = useState([]);

const handleInput = (e) => {

    setSearchInput(e.target.value)
    }

const handleClick = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  console.log("kilkinięty")
}

 useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+{searchInput})
    .then(response => setBooks(response.data.items))
    .catch(err => console.log(err))
  },[searchInput]);
    return (  
        <>  
        <Header key = "0">
            <Heading>Library App</Heading>
            <InputDiv>
            <Input
                icon = "search" 
                placeholder = "search books" 
                value = {searchInput}
                onChange ={handleInput}/>
            <Button
                content = "click"
                onClick = {handleClick}>
                Click</Button>
            </InputDiv>
            <Image key = "5" src={HeaderImg} alt="header" />
        </Header>
        <Container key = "6">
        {books.map(item => (
        <Card key={item.id}>
          <li>{item.volumeInfo.authors} </li>
          <li>{item.volumeInfo.title}</li>
          <img src ={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail} alt='thumbnail' />
          <li>przeczytaj</li>
          </Card>
        ))}
    </Container>
    </>
    )}

    export default App;



