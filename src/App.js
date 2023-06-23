import "./App.css";
import SearchEngine from "./SearchEngine";
function App() {
  return (
    <div className="App">
      <SearchEngine />

      <div className="footer">
        <a
          href="https://github.com/duongni/weather-react"
          title="Link to github"
          target="_blank"
        >
          Open-source Code
        </a>{" "}
        by Ni D.
      </div>
    </div>
  );
}

export default App;
