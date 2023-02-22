import { useState, useEffect } from 'react'
import BookList from './bookList'
import BookDetails from "./bookDetails"

async function searchBooks(query, startIndex, setTotalItems) {
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&startIndex=${startIndex}`;
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTotalItems(data.totalItems);
        console.log(data.items);
        return data.items;
    } catch (error) {
        console.error("Failed to fetch books:", error);
        return [];
    }
}


const BookBrowser = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [selectedBook, setSelectedBook] = useState(null);

    const fetchBooks = async () => {
        const results = await searchBooks(query, startIndex, setTotalItems);
        if (results.length > 0) {
            setBooks(results);
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        await fetchBooks();
    };

    const handleNextPage = async () => {
        const newStartIndex = startIndex + 40;
        if (newStartIndex >= totalItems) {
            return;
        }
        setStartIndex(newStartIndex);
        await fetchBooks();
    };

    const handleLastPage = async () => {
        if (startIndex <= 0) {
            return;
        }
        const newStartIndex = startIndex - 40;
        setStartIndex(newStartIndex);
        await fetchBooks();
    };

    const handleSelectBook = (book) => {
        setSelectedBook(book);
    };



    return (
        <div className="mt-4 mx-8 text-center">
            <div className={selectedBook ? 'hidden' : ''}>
                <h1 className="text-xl mt-6 mb-4">Busque sus libros favoritos</h1>
                <form className='border border-x-transparent border-t-transparent border-black pb-4' onSubmit={handleSubmit}>
                    <input placeholder="E.J Harry Potter y el prisionero de azkaban"
                        value={query}
                        onChange={event => setQuery(event.target.value)} type="text" className="m-4 border rounded w-1/2 sm:w-9/12 text-center" />
                    <div className="">
                        <button type="submit" className="rounded border border-black h-8 w-14 mx-2 mt-4">Buscar</button>
                        <button className="rounded border border-black h-8 w-14 mx-2 mt-4">Borrar</button>
                    </div>
                </form>
                <div className="mt-4">
                    <button onClick={handleLastPage} className={(query) ? "rounded border border-black p-2 mx-2 mt-4" : "hidden"}>Anterior</button>
                    <button onClick={handleNextPage} className={(query) ? "rounded border border-black p-2 mx-2 mt-4" : "hidden"}>Siguiente</button>
                </div>
            </div>
            {selectedBook ? <BookDetails book={selectedBook} setSelectedBook={setSelectedBook} /> :
                <BookList books={books} handleSelectBook={handleSelectBook} />
            }

        </div>
    )
};
export default BookBrowser
