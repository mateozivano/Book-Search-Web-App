import BookBrowser from "./browser"
import Navbar from "./nav"

import { useState } from "react";

function App() {


  return (
    <section>
      <Navbar></Navbar>

      <BookBrowser />

    </section>
  )
};

export default App;


