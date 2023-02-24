import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookBrowser from "./browser";
import Informacion from "./Info";
import Proyectos from "./Proyectos";
import Redes from "./redes";
import Navbar from "./nav";

function App() {
  return (
    <BrowserRouter>
      <section>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookBrowser />} />
          <Route path="/Informacion" element={<Informacion />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Redes" element={<Redes />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;


