import logo from './mirror.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          施琼娜的简历
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/joan-shi-87a152179/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Joan
        </a>
      </header>
    </div>
  );
}

export default App;
