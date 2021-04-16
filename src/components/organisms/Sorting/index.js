import React, { Component } from "react";
// import "./style.scss";

import AppControls from "../../molecules/AppControls";
import SortVisualizer from "../../molecules/SortVisualizer";
import BubbleSort from "../../../helpers/algorithms/BubbleSort";
import SelectionSort from "../../../helpers/algorithms/SelectionSort";
import InsertionSort from "../../../helpers/algorithms/InsertionSort";
import MergeSort from "../../../helpers/algorithms/MergeSort";
import QuickSort from "../../../helpers/algorithms/QuickSort";
import QuickSort3 from "../../../helpers/algorithms/QuickSort3";
import HeapSort from "../../../helpers/algorithms/HeapSort";
import ShellSort from "../../../helpers/algorithms/ShellSort";

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
    "Quick Sort 3": QuickSort3,
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
    console.log(this.state.arraySize)
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
      <div className="App">
        <main className="App__Body">
          <SortVisualizer array={this.state.array} trace={this.state.trace}>
            {controls}
          </SortVisualizer>
        </main>
      </div>
    );
  }
}

export default Sorting;
