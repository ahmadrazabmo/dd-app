import "./App.css";
import SearchBar from "./components/search/search";
import EsgTable from "./components/esg/esgTable";
import { useState } from "react";

function App() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar setShowResults={setShowResults} />
        {showResults ? <EsgTable /> : null}
      </header>
    </div>
  );
}

export default App;
