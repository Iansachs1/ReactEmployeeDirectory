import React from "react";
import Jumbotron from "./components/Jumbotron.js";
import Search from "./components/Search.js";
import SearchResultContainer from "./components/SearchResultContainer"

function App() {
  return (
  <div>
      <Jumbotron />;
      <SearchResultContainer />;
  </div>
  )
}

export default App;
