import React from 'react';

const BookDetails = ({ book, setSelectedBook }) => {
  return (
    <div>
        <button onClick={() => setSelectedBook(null)}>Go back</button>
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.description}</p>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
    </div>
  );
};

export default BookDetails;