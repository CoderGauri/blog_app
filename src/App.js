import React, { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [postName, setPostName] = useState('');
  const [description, setDescription] = useState('');
  const[author , setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = { postName, description, author };
    setPosts([...posts , newPost])
    // Here you can handle form submission, e.g., send data to backend or perform any necessary actions
    console.log("Submitted: ", { postName, description ,author});
    // You can also reset the form fields after submission if needed
    setPostName('');
    setDescription('');
    setAuthor('');
  };

  return (
    <div className="App">
      <h1>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="postName">Post Name:</label>
          <input
            type="text"
            id="postName"
            value={postName}
            onChange={(e) => setPostName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Author">Author:</label>
          <textarea
            id="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="post-list">
        <h2>Posts</h2>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h3>{post.postName}</h3>
              <p>{post.description}</p>
              <p>{post.author}</p>
            </li>
          ))}
        </ul> 
      </div>
    </div>
  );
}

export default App;
