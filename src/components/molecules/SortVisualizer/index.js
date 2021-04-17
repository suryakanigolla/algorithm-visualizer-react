import React, { Component } from "react";
import "./style.scss";

import SortChart from "../SortChart";
import VisualizerControls from "../../molecules/VisualizerControls";

class SortVisualizer extends Component {
  state = {
    trace: [],
    traceStep: -1,

    originalArray: [],
    array: [],
    groupA: [],
    groupB: [],
    groupC: [],
    groupD: [],
    sortedIndices: [],

    timeoutIds: [],
    playbackSpeed: 1,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.array !== this.props.array) {
      this._reset(this.props.array);
    }
    if (prevProps.trace !== this.props.trace) {
      this.clearTimeouts();
      this.setState({ trace: this.props.trace });
    }
  }

  _reset = (array) => {
    this.setState({
      array,
      trace: [],
      traceStep: -1,
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
      sortedIndices: [],
      originalArray: [...array],
    });
  };

  clearTimeouts = () => {
    this.state.timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    this.setState({ timeoutIds: [] });
  };

  _changeVisualState = (visualState) => {
    this.setState({
      array: visualState.array,
      groupA: visualState.groupA,
      groupB: visualState.groupB,
      groupC: visualState.groupC,
      groupD: visualState.groupD,
      sortedIndices: visualState.sortedIndices,
    });
  };

  run = (trace) => {
    const timeoutIds = [];
    const timer = 250 / this.state.playbackSpeed;

    trace.forEach((item, i) => {
      let timeoutId = setTimeout(
        (item) => {
          this.setState(
            (prevState) => ({
              traceStep: prevState.traceStep + 1,
            }),
            this._changeVisualState(item)
          );
        },
        i * timer,
        item
      );

      timeoutIds.push(timeoutId);
    });
    let timeoutId = setTimeout(this.clearTimeouts, trace.length * timer);
    timeoutIds.push(timeoutId);
    this.setState({ timeoutIds });
  };

  pause = () => {
    this.clearTimeouts();
  };

  continue = () => {
    const trace = this.state.trace.slice(this.state.traceStep);
    this.run(trace);
  };

  adjustPlaybackSpeed = (e) => {
    const playing = this.state.timeoutIds.length > 0;
    this.pause();
    const playbackSpeed = Number(e.target.value.split("x")[0]);
    this.setState({ playbackSpeed }, () => {
      if (playing) this.continue();
    });
  };

  render() {
    return (
      <div className="Sort-Visual">
        <div className="Sort-Visual__Controls">
          <div>
            {this.props.children}
          </div>
          <div>
            <VisualizerControls
              onPlay={
                this.state.traceStep === -1
                  ? this.run.bind(this, this.state.trace)
                  : this.continue.bind(this)
              }
              onPause={this.pause.bind(this)}
              onAdjustSpeed={this.adjustPlaybackSpeed}
              playing={this.state.timeoutIds.length > 0}
              playDisabled={
                (this.state.traceStep >= this.state.trace.length - 1 &&
                  this.state.traceStep !== -1) ||
                this.state.trace.length <= 0
              }
              playbackSpeed={this.state.playbackSpeed}
            />
          </div>
        </div>
        <SortChart
          numbers={this.state.array}
          maxNum={Math.max(...this.state.array)}
          groupA={this.state.groupA}
          groupB={this.state.groupB}
          groupC={this.state.groupC}
          groupD={this.state.groupD}
          sortedIndices={this.state.sortedIndices}
        />
      </div>
    );
  }
}

export default SortVisualizer;
