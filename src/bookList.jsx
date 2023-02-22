import React from 'react';

const BookList = ({ books, handleSelectBook }) => {
    return (
        <ul className=''>
            {books && books.map((book, index) => (
                <li className='p-4' key={`${book.id}-${index}`}>
                    <div onClick={() => handleSelectBook(book)} className='flex shadow'>
                        <div>
                            <img className='h-48 w-32' src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "../public/icon-image-not-found-free-vector.webp"} alt="Book Cover" />
                        </div>
                        <div className='pl-4 text-left'>
                            <h2>{book.volumeInfo.title}</h2>
                            <p>{book.volumeInfo.publishedDate || "Fecha desconocido"}</p>
                            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Autor desconocido"}</p>
                            <p>{book.volumeInfo.categories ? book.volumeInfo.categories.join(", ") : "Desconocido"}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>)
}

export default BookList
