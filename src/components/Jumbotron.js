import React from "react";

import ResultTable from "./ResultTable";
import Search from "./Search";

function Jumbotron() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">Search for specific employees or click on name header to sort by name</p>
        </div>
      </div>

      <ResultTable />
    </div>
  );
}

export default Jumbotron;