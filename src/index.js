import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "./Provider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PathFinding from "./components/organisms/PathFinding"

const routing = (
  <Router>
    <Provider>
      <Route exact path="/" component={App}></Route>
      <Route path="/pathfinding" component={PathFinding}></Route>
      {/* <Route path="/sorting" component={Sorting}></Route> */}
    </Provider>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
