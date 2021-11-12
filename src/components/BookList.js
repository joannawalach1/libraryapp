import {useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width:100%;
justify-content:center;
padding: 20px;
`

const Card = styled.div`
width: 10%;
padding: 40px;
`

const Image = styled.img`
width: 150px;
height: 200px;
float:left;
`

const Button = styled.button`
background-color: green;
color: white;
border:0;
margin-top: 5px;
padding: 3px 15px 3px 15px;
`
const Author = styled.p`
`
const Title = styled.p`
color: green;
font-weight: 700;
`


const BookList = () => {
    const [books, setBooks] = useState([]);
        
    useEffect(()=>{
        axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyCNGtCug7Ln0l5_4BDDeJBY97kHN0WuoyU")
        .then(response => setBooks(response.data.items))
        .catch(err => console.log(err))
      },[]);
    return (
        <Container>
            {books.map(item => (
            <Card>
              <Author key={item.id}>{item.volumeInfo.authors}</Author>
              <Title>{item.volumeInfo.title}</Title>
              <Image src ={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail} alt='thumbnail' />
              <Button>przeczytaj</Button>
              </Card>
            ))}
        </Container>
      )
    };

export default BookList;
