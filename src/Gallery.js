// import data from './gallery.json';
import Artcard from "./Artcard";

export default function Gallery(props) {
  console.log(props.artworkData);
  return (<main>
    <h3>{props.artworkData[0].title}</h3>
  </main>);
}
