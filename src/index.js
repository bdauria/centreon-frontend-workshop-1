import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Example from "./example";
import Exo1 from "./exo1";
import Exo2 from "./exo2";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Centreon Frontend Workshop #1</h1>
        <h2>Unit Testing React Components</h2>

        <ul>
          <li>
            <Link to="/example">Example</Link>
          </li>
          <li>
            <Link to="/exo1">Exo1</Link>
          </li>
          <li>
            <Link to="/exo2">Exo2</Link>
          </li>
        </ul>
      </div>

      <Route path="/example" exact component={Example} />
      <Route path="/exo1" exact component={Exo1} />
      <Route path="/exo2" exact component={Exo2} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
