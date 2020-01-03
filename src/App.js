import React from "react";
import "./App.css";
import Pdf from "./PDF";

function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="col-md-auto text-center">
          <h1 className="text-white bg-info rounded">Fetch PDF by URL</h1>
          <div className="border rounded">
            <Pdf />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
