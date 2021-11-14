import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderImg from './../img/header.jpg';
import axios from 'axios';

const Header = styled.div `
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
const [query, setQuery] = useState('');
const [books, setBooks] = useState([]);

const handleSubmit = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(response => setBooks(response.data.items))
    .catch(err => console.log(err))
    console.log("aaaaaaaaaaaaaaa")
};

    return (   
        <><Header>
        <h1>Library App</h1>
          <input type="text" value={query} onChange={e => setQuery(e.target.value)}></input>
          <button onClick={handleSubmit}>send</button>
          <img src={HeaderImg} alt="header" />
      </Header>
      <Container>
          {books.map(item => (
            <Card key={item.id}>
              <li>{item.volumeInfo.authors} </li>
              <li>{item.volumeInfo.title}</li>
              <img src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail} alt='thumbnail' />
              <li>przeczytaj</li>
            </Card>
          ))}
        </Container></>
    )}

    

    export default App;



