/*

const [input, setInput] = useState('');

const [book, setBook] = useState('');
const [open, setOpen] = useState(false);
const [openModal, setOpenModal] = useState(false);

const handleOpen = (idBook) => {
  setBook(idBook);
  setOpen(true);
};

const handleSubmit = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
    .then(response => setBooks(response.data.items))
    .catch(err => console.log(err))
};

return (
<div>
  

  <Container>
      {books.map((idBook) =>  (
      <div onClick={() => handleOpen(idBook)}>
        <div>
          <Card >{idBook.id} 
            <Author>{idBook.volumeInfo.authors} </Author>
            <Title>{idBook.volumeInfo.title}</Title>
            <Image src={idBook.volumeInfo.imageLinks && idBook.volumeInfo.imageLinks.thumbnail} alt='thumbnail' />
            <Read onClick={()=>setOpenModal(true)}>przeczytaj</Read>
          </Card>
        </div>
)         
      
        {openModal&&  (<Portal><BookDetails id= {`${Book}`} title={idBook.volumeInfo.title} authors={idBook.volumeInfo.authors} description={idBook.volumeInfo.description} thumbnail={idBook.volumeInfo.imageLinks.thumbnail}/></Portal>)}
         </div>
        
        ))}    
        </Container>
        </div>
        )}
        
      } */

      export default App;