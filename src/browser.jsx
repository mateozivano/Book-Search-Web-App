import { useState, useEffect } from 'react'

async function searchBooks(query, startIndex) {
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&startIndex=${startIndex}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error("Failed to fetch books:", error);
        return [];
    }
}


const MovieBrowser = ({ setSelectedBook }) => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const handleSubmit = async event => {
        event.preventDefault();
        const results = await searchBooks(query, startIndex);
        setBooks(results);
        setTotalItems(results.length);
    };


    const handleNextPage = async () => {
        if (startIndex + 40 >= totalItems) {
            return;
        }
        setStartIndex(startIndex + 40);
        const results = await searchBooks(query, startIndex + 40);
        setBooks(results);
    };


    const handleLastPage = async () => {
        if (startIndex <= 0) {
            return;
        }
        setStartIndex(startIndex - 40);
        const results = await searchBooks(query, startIndex - 40);
        setBooks(results);
    };

    const handleSelectBook = (book) => {
        setSelectedBook(book);
    };

    return (
        <div className="mt-4 mx-8 text-center">
            <h1 className="text-xl">Busque sus libros favoritos</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="E.J Harry Potter y el prisionero de azkaban"
                    value={query}
                    onChange={event => setQuery(event.target.value)} type="text" className="border rounded w-1/2 sm:w-9/12 text-center" />
                <div className="">
                    <button type="submit" className="rounded border border-black h-8 w-14 mx-2 mt-4">Buscar</button>
                    <button className="rounded border border-black h-8 w-14 mx-2 mt-4">Borrar</button>
                </div>
            </form>
            <div className="mt-4">
                <button onClick={handleLastPage} className="rounded border border-black h-8 w-14 mx-2 mt-4">Last Page</button>
                <button onClick={handleNextPage} className="rounded border border-black h-8 w-14 mx-2 mt-4">Next Page</button>
            </div>
            <ul className=''>
                {books.map(book => (
                    <li className='p-4' key={book.id}>
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
            </ul>

        </div>
    )
};
export default MovieBrowser
