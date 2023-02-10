import MovieBrowser from "./browser"
import Navbar from "./nav"
import BookDetails from "./bookDetails"
import { useState } from "react";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <section>
      <Navbar></Navbar>
      {selectedBook ? <BookDetails book={selectedBook} setSelectedBook={setSelectedBook}/> :
        <MovieBrowser setSelectedBook={setSelectedBook} />
      }
    </section>
  )
};

export default App;


