import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
position: fixed;
left:0;
top:0;
width: 100%;
height: 100%;
background: grey;
z-index: 1;
`
const ModalContainer = styled.div `
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 50%; 
`

const ModalHeader = styled.div `
color: red;`


const BookDetails = ({ closeModal, id, authors, title, description, thumbnail}) => {
    return (
        <ModalBackground>
        <ModalContainer>
        <button onClick = {() => closeModal(false)}> X </button>
        <ModalHeader>
            <h1> {id}</h1>
        <h1>{title} </h1> 
        <h3>{authors}</h3>
        </ModalHeader>
        <div>
        <p> ModalBody </p>
        {thumbnail}
        {description}
        </div>
        <div>
        <button>continue</button>
        <button> cancel </button>
        </div>
        </ModalContainer>
        </ModalBackground>
    );
}

export default BookDetails;