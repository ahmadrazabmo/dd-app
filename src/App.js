import "./App.css";
import SearchBar from "./components/search/search";
import EsgTable from "./components/esg/esgTable";
import { useState } from "react";

function App() {
  const [ticker, setTicker] = useState(null);
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar
          ticker={ticker}
          setTicker={setTicker}
          setShowResults={setShowResults}
        />
        <div style={{ paddingTop: "15px" }}>
          {showResults ? <EsgTable ticker={ticker} /> : null}
        </div>
      </header>
    </div>
  );
}

export default App;
