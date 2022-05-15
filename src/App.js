import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Test</h1>
          <nav>
            <Link to="/rome">Rzym</Link> | <Link to="/chronicles">Kroniki</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
