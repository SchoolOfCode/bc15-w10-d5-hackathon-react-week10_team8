import Artcard from "./Artcard";

export default function Gallery(props) {
  console.log(props.artworkData);
  return (<main className="artcard-conatiner">
  {props.artworkData.map(artwork => <Artcard artwork={artwork}/>)}


</main>);



  }


//   key = {artwork.id}
// picture = {artwork.picture}
// title = {artwork.title}
// year = {artwork.year}