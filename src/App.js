import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <SearchEngine defaultCity="Seattle" />

      <div className="footer">
        <a
          href="https://github.com/duongni/weather-react"
          title="Link to github"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced Code
        </a>
        by Ni D.
      </div>
    </div>
  );
}

export default App;
