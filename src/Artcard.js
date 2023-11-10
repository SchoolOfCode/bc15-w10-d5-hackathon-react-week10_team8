

export default function Artcard({artwork}) {
    return (
        <main className="artcard">
           
           <img src={artwork.picture} className="image" alt={artwork.title} />
            <h3>{artwork.title}</h3>
            <p>{artwork.artist} ({artwork.year})</p>
        
        </main>
    )
}