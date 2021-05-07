import { newTrace, addToTrace } from "./helpers";

const InsertionSort = (nums) => {
  const trace = newTrace(nums);

  for (let i = 1; i < nums.length; i++) {
    let value = nums[i];
    let hole = i;
    addToTrace(trace, nums, [], [i]);
    while (hole > 0 && nums[hole - 1] > value) {
      addToTrace(trace, nums, [], [hole], [hole - 1]);
      nums[hole] = nums[hole - 1];
      hole -= 1;
      addToTrace(trace, nums, [], [], [hole, hole + 1]);
    }
    addToTrace(trace, nums, [], [], [], [hole]);
    nums[hole] = value;
    addToTrace(trace, nums, [], [], [], [hole]);
  }
  addToTrace(trace, nums, [...Array(nums.length).keys()]);
  return trace;
};

export default InsertionSort;
