import { useState } from 'react';

export default function Form({ onAddArtwork }) {
    const [picture, setPicture] = useState('');
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page refresh
        const newArtwork = { picture, title, artist, year }; // Create new artwork object
        onAddArtwork(newArtwork); // Call the function passed from parent to add the artwork
        // Reset form fields
        setPicture('');
        setTitle('');
        setArtist('');
        setYear('');
    };

    return (
        <form className="form-footer" onSubmit={handleSubmit}>
            <label htmlFor="picture">Picture: </label>
            <input type="text" id="picture" value={picture} onChange={(e) => setPicture(e.target.value)} placeholder="e.g. 'http://imgur.com/GHJ59'"/>
            
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. 'Mona Lisa'"/>
            
            <label htmlFor="artist">Artist: </label>
            <input type="text" id="artist" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="e.g. 'Leonardo da Vinci'"/>
            
            <label htmlFor="year">Year: </label>
            <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} placeholder="e.g. '1503'"/>
            
            <button className="add" type="submit">Add</button>
        </form>
    );
}
