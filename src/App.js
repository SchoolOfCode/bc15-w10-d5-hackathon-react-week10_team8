import { useState } from "react";

import Header from "./Header";
// import Form from './Form';
import Gallery from "./Gallery";
import data from "./gallery.json";
import "./App.css";

function App() {
  const [artworkData, setArtworkData] = useState(data);

  return (
    <>
    <p>This is the main App</p>
      <Header />
      <Gallery artworkData={artworkData} />
    </>
  );
}

export default App;
