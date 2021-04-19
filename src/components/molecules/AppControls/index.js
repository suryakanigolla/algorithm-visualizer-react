import React, { Fragment } from "react";
import Button from "../../atoms/Button";
import "./style.scss";

const AppControls = ({
  algorithm,
  onAlgorithmChange,
  onGenerateRandomArray,
  arraySize,
  onArraySizeChange,
}) => {
  const handleSizeChange = (e) => {
    onArraySizeChange(e.target.value);
  };

  const handleAlgoChange = (e) => {
    onAlgorithmChange(e.target.value);
  };

  return (
    <Fragment>
      <div className="AppControls__Select">
        <select
          onChange={(e) => handleAlgoChange(e)}
        >
          <option selected="true" disabled="disabled" defaultChecked>Algorithm</option>    
          <option value="Bubble Sort" >Bubble Sort</option>
          <option value="Selection Sort">Selection Sort</option>
          <option value="Insertion Sort">Insertion Sort</option>
          <option value="Merge Sort">Merge Sort</option>
          <option value="Quick Sort">Quick Sort</option>
          <option value="Heap Sort">Heap Sort</option>
          <option value="Shell Sort">Shell Sort</option>
        </select>
      </div>

      <div className="AppControls__Select">
        <select
          onChange={(e) => handleSizeChange(e)}
          defaultValue={String(arraySize)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
      </div>

      <Button onClick={onGenerateRandomArray}>Randomize</Button>
    </Fragment>
  );
};

export default AppControls;
