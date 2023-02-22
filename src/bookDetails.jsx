import React from 'react';

const BookDetails = ({ book, setSelectedBook }) => {
  return (
    <div>

      <button className='p-1 flex justify-start border border-gray-400 rounded' onClick={() => setSelectedBook(null)}>Volver</button>
      <div className='m-4 mt-10'>
        <div className='md:flex border border-b-black border-x-transparent border-t-transparent'>
          <img className='mx-auto md:mx-0' src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "../public/icon-image-not-found-free-vector.webp"} alt={book.volumeInfo.title} />
          <div className='m-auto'>
            <h2 className="text-xl m-4">{book.volumeInfo.title}</h2>
            <p>Publicacion: {book.volumeInfo.publishedDate || "Fecha desconocido"}</p>
            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Autor desconocido"}</p>
            <p>{book.volumeInfo.categories ? book.volumeInfo.categories.join(", ") : "Desconocido"}</p>
          </div>
        </div>

        <p className='text-left text-lg m-4 tracking-wide border pb-4 border-b-black border-x-transparent border-t-transparent'>{book.volumeInfo.description}</p>
        <div className='md:flex flex-row md:divide-x divide-slate-200 justify-between text-start'>
          <div>

            <h2 className='text-xl text-red-700'>Mas datos</h2>
            {book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers.map((identifier, index) => (
              <p key={index} className="text-sm border border-x-transparent border-t-transparent border-b-black">{`${identifier.type}: ${identifier.identifier}`}</p>
            ))}
            <p className='text-sm border border-x-transparent border-t-transparent border-b-black'>Paginas: {book.volumeInfo.pageCount ? book.volumeInfo.pageCount : 'Desconocidas'}</p>
            <p className='text-sm border border-x-transparent border-t-transparent border-b-black'>Editorial {book.volumeInfo.publisher ? book.volumeInfo.publisher : 'Desconocida'}</p>
          </div>
          <div>

            {book.saleInfo.buyLink ?
              <div> <h2 className='text-xl underline pt-4 pl-2 md:pt-0 pb-2'>Compre este libro</h2>
                <a className='border rounded border-gray-600 ml-2 mt-2' href={book.saleInfo.buyLink}>Presione aqui</a> 
                <p className='text-sm pl-2 pt-2'>Nuestro enlace lleva a la tienda de Google books</p>
                
                </div>
              :
              <p className='text-lg underline pt-4 md:pt-0'>Este producto no se encuentra a la venta</p>
             }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;