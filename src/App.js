import { Component } from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js"
import {particleConfig} from "./helpers/particlesjs-config"
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__Bg">
          <Particles params={particleConfig} />
        </div>
        <div className="App__Body">
          <h1>Algorithm Visualization</h1>
          <div className="App__Body__Links">
            <div>
              <Link to="/sorting">Sorting</Link>
            </div>
            <div>
              <Link to="/pathfinding">Pathfinding</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
