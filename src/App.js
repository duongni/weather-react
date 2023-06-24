import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <SearchEngine defaultCity="Bloomfield" />

      <div className="footer">
        <a
          href="https://github.com/duongni/weather-react"
          title="Link to github"
          target="_blank"
          rel="noreferrer"
        >
          Open-source Code
        </a>{" "}
        by Ni D.
      </div>
    </div>
  );
}

export default App;
