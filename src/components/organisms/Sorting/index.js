import React, { Component } from "react";

import AppControls from "../../molecules/AppControls";
import SortVisualizer from "../../molecules/SortVisualizer";
import BubbleSort from "../../../helpers/algorithms/BubbleSort";
import SelectionSort from "../../../helpers/algorithms/SelectionSort";
import InsertionSort from "../../../helpers/algorithms/InsertionSort";
import MergeSort from "../../../helpers/algorithms/MergeSort";
import QuickSort from "../../../helpers/algorithms/QuickSort";
import HeapSort from "../../../helpers/algorithms/HeapSort";
import ShellSort from "../../../helpers/algorithms/ShellSort";
import { sortingdef } from "../../../helpers/descriptions/sortingdef";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Particles from "react-particles-js"
import {particleConfig} from "../../../helpers/particlesjs-config"
import "react-tabs/style/react-tabs.css";
import "./style.scss";

const ColorCode = ({ color, text }) => {
  return (
    <div className="ColourCodes__Item">
      <div style={{ backgroundColor: color }}></div>
      <p>{text}</p>
    </div>
  );
};

const colors = [
  {
    color: "#66bb6a",
    text: "Sorted",
  },
  {
    color: "#ffd54f",
    text: "Comparing",
  },
  {
    color: "#f06292",
    text: "Swapping",
  },
  {
    color: "#ef5350",
    text: "Overwritten",
  },
];


class Sorting extends Component {
  state = {
    array: [],
    arraySize: 10,
    trace: [],
    algorithm: null,
  };

  ALGORITHM = {
    "Bubble Sort": BubbleSort,
    "Selection Sort": SelectionSort,
    "Insertion Sort": InsertionSort,
    "Merge Sort": MergeSort,
    "Quick Sort": QuickSort,
    "Heap Sort": HeapSort,
    "Shell Sort": ShellSort,
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomArray = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }
    const array = Array(this.state.arraySize)
      .fill(0)
      .map(() => getRandomInt(this.state.arraySize * 5));

    this.setState(
      {
        array,
        trace: [],
      },
      this.createTrace
    );
  };

  handleAlgorithmChange = (algorithm) => {
    this.setState({ algorithm }, this.generateRandomArray);
  };

  handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > 100 ? 100 : size;
    size = size < 0 ? 0 : size;
    this.setState({ arraySize: size }, this.generateRandomArray);
  };

  createTrace = () => {
    const numbers = [...this.state.array];
    const sort = this.ALGORITHM[this.state.algorithm];
    if (sort) {
      const trace = sort(numbers);
      this.setState({ trace });
    }
  };

  render() {
    const controls = (
      <AppControls
        onGenerateRandomArray={this.generateRandomArray}
        algorithm={this.state.algorithm}
        onAlgorithmChange={this.handleAlgorithmChange}
        arraySize={this.state.arraySize}
        onArraySizeChange={this.handleArraySizeChange}
      />
    );

    return (
      <div className="Sorting">
        <div className="Sorting__Bg">
          <Particles params={particleConfig} />
        </div>
        <div className="Sorting__Body">
          <h2 className="Sorting__Title">Sorting Visualization</h2>
          <SortVisualizer array={this.state.array} trace={this.state.trace}>
            {controls}
          </SortVisualizer>
        </div>
        <div className="Sorting__Extra">
          <div className="Sorting__Extra__Legend">
            <h2 className="Sorting__Extra__Legend__Title">Colour Codes</h2>
            <div className="Sorting__Extra__Legend__ColourCodes">
              {colors.map((item, index) => (
                <ColorCode key={index} color={item.color} text={item.text} />
              ))}
            </div>
          </div>
          <div className="Sorting__Extra__Description">
            <Tabs>
              <TabList>
                {sortingdef.map((item, index) => (
                  <Tab key={index}>{item.name}</Tab>
                ))}
              </TabList>
              {sortingdef.map((item, index) => (
                <TabPanel key={index}>
                  <div className="Sorting__Extra__Description__Item">
                    <h2>{item.name}</h2>
                    <div>
                      <p>{item.desc}</p>
                    </div>
                    <div>
                      {Object.keys(item.performance).map((key, index) => (
                        <p key={index} style={{marginBottom: "0px"}}>
                          <span>{key}: </span>
                          <span>{item.performance[key]}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Sorting;
