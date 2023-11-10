export default function Form() {
    return (
        <form className="form-footer">

      <label htmlFor="picture">Picture: </label>
      <input type="text" id="picture" name="picture" placeholder="e.g. 'http://imgur.com/GHJ59'"/>
      <label htmlFor="title">Title: </label>
      <input type="text" id="title" name="title" placeholder="e.g. 'Mona Lisa'"/>
      <label htmlFor="artist">Artist: </label>
      <input type="text" id="artist" name="artist" placeholder="e.g. 'Leonardo da Vinci'"/>
      <label htmlFor="year">Year: </label>
      <input type="text" id="year" name="year" placeholder="e.g. '1503'"/>
      <button className="add">Add</button>

        </form>
    )
}