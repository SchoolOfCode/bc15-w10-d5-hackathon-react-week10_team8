import { useState } from "react";

import Header from "./Header";
import Form from './Form';
import Gallery from "./Gallery";
import data from "./gallery.json";
import "./App.css";

function App() {
  const [artworkData, setArtworkData] = useState(data);

  // Function to add new artwork
  const addArtwork = (newArtwork) => {
    // Adding an id to the new artwork
    const newArtworkWithId = { ...newArtwork, id: artworkData.length + 1 };
    setArtworkData([...artworkData, newArtworkWithId]);
  };

  return (
    <>
      <Header />
      <Gallery artworkData={artworkData} />
      <Form onAddArtwork={addArtwork} /> {/* Pass the function as a prop */}
    </>
  );
}

export default App;
