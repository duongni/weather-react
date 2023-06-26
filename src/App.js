import "./App.css";
import SearchEngine from "./SearchEngine";
import "weather-icons/css/weather-icons.css";
function App() {
  return (
    <div className="App">
      <SearchEngine defaultCity="Seattle" />
    </div>
  );
}

export default App;
