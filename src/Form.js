export default function Form() {
    return (
        <form>

      <label htmlFor="picture">Picture: </label>
      <input type="text" id="picture" name="picture" />
      <label htmlFor="title">Title: </label>
      <input type="text" id="title" name="title" />
      <label htmlFor="artist">Artist: </label>
      <input type="text" id="artist" name="artist" />
      <label htmlFor="year">Year: </label>
      <input type="text" id="year" name="year" />
      <button className="add">Add</button>

        </form>
    )
}