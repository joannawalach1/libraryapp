import {useState, useEffect } from 'react';
import axios from 'axios';
import book from './Book';

const BookList = () => {
    const [books, setBooks] = useState([]);
        
    useEffect(()=>{
        
        axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyCNGtCug7Ln0l5_4BDDeJBY97kHN0WuoyU")
        .then(response => setBooks(response.data.items))
        .catch(err => console.log(err))
      },[]);
    return (
        <div className="container">
            {books.map(book => (
            <div className="card" >
              <p key={book.id}>{book.volumeInfo.subtitle}</p>
              </div>
            ))}
        </div>
      )
    };

export default BookList;
