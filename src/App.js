
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Create a New Blog Post</h1>
      <form>
        <div className="form-group">
          <label htmlFor="postName">Post Name:</label>
          <input type="text" id="postName" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
