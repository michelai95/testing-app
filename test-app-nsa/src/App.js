import logo from './logo.svg';
import './App.css';
import Login from './Login.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
