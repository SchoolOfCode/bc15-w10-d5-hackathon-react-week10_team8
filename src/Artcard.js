// import data from './gallery.json';

export default function Artcard({artwork}) {
    return (
        <main className="artcard">
           <div>
           <img src={artwork.picture} alt={artwork.title} />
            <h3>{artwork.title}</h3>
            <p>{artwork.artist} ({artwork.year})</p>
        </div> 
        </main>
    )
}