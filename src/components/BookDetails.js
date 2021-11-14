import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


const BookDetails = ({closeModal}, authors, title, description, thumbnail, props) => {
    return (
        <div>
          <button onClick = {() => closeModal(false)}>X</button>
          <div>
            <h1>aaaaaa</h1>
            </div>
          <div>
            <p>ModalBody</p>
            </div>
          <div>
            <button>continue</button>
            <button>cancel</button>
          </div>
fffffffffffffffffff
</div> 
    )
}

export default BookDetails;