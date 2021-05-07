import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
} from './helpers';

const SelectionSort = (nums) => {
  const trace = newTrace(nums);

  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      addToTrace(trace, nums, lastSorted(trace), [minIndex, j]);
      if (nums[j] < nums[minIndex]) {
        addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
        minIndex = j;
        addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
      }
    }
    addToTrace(trace, nums, lastSorted(trace), [], [i, minIndex]);
    swap(nums, i, minIndex);
    addToTrace(trace, nums, [...lastSorted(trace), i], [], []);
  }
  addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1]);

  return trace;
};



export default SelectionSort;
