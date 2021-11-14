import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderImg from './../img/header.jpg';
import BookDetails from './BookDetails';
import axios from 'axios';

const Header = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Heading = styled.h1`
padding-left: 30px;
`

const Image = styled.img`
width: 100%;
height: 400px;
`
const SearchBar = styled.div`
position: absolute;
display: flex;
flex-direction: row;
width: 50%;
` 

const Input = styled.input`
width: 100%;
height: 35px;
border:0;
outline:0;
padding-left: 30px;
`
const Button = styled.button`
height: 36px;
background: red;
color: white;
border: 0;
padding: 0 30px 0 30px;
`

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width:100%;
justify-content:center;
font-family:Sans-serif;
padding: 20px;
`

const Card = styled.div`
width: 15rem;
padding: 40px;
`

const Book = styled.img`
width: 180px;
height: 260px;
`

const Author = styled.p`
`
const Title = styled.p`
font-weight: 600;
color: blue;
`

const Read = styled.button`
background-color: red;
color: white;
border: 0;
padding: 5px 15px 5px 15px;
`

function App () {
const [input, setInput] = useState('');
const [books, setBooks] = useState([]);
const [openModal, setOpenModal] = useState(false);

const handleSubmit = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
    .then(response => setBooks(response.data.items))
    .catch(err => console.log(err))
};

    return (   
        <><Header>
        <Heading>Library App</Heading>
        <SearchBar>
          <Input type="text" value={input} onChange={e => setInput(e.target.value)}></Input>
          <Button onClick={handleSubmit}>search</Button>
        </SearchBar>
          <Image src={HeaderImg} alt="header" />
      </Header>
      <Container>
          {books.map(item => (
            <Card key={item.id}>
              <Author>{item.volumeInfo.authors} </Author>
              <Title>{item.volumeInfo.title}</Title>
              <Book src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail} alt='thumbnail' />
              <Read onClick = {() => setOpenModal(true)}>przeczytaj</Read>
              {openModal&&<BookDetails closeModal = {setOpenModal} id = {item.id} title={item.volumeInfo.title} authors={item.volumeInfo.authors} description = {item.volumeInfo.description} thumbnail={item.volumeInfo.imageLinks.thumbnail}/>}
            </Card>
          ))}
        </Container></>
    )}

    export default App;



