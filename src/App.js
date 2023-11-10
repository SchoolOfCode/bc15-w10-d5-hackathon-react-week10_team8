import { useState } from "react";

import Header from "./Header";
import Form from './Form';
import Gallery from "./Gallery";
import data from "./gallery.json";
import "./App.css";

console.log(data);

function App() {
  const [artworkData, setArtworkData] = useState(data);

  return (
    <>
      <Header />
      <Gallery artworkData={artworkData} />
<Form />
    </>
  );
}

export default App;
