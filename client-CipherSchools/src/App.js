import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <video controls muted>
        <source src="http://localhost:5000/video" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default App;
