import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createRange,
} from './helpers';

const QuickSort = (nums) => {
  const trace = newTrace(nums);

  function choosePivot(array, start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
  }

  function partition(array, start, end) {
    let i = start + 1;
    let j = start + 1;

    addToTrace(trace, array, lastSorted(trace), [start]);

    while (j <= end) {
      if (array[j] < array[start]) {
        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [j],
          [],
          createRange(start + 1, i)
        );

        swap(array, i, j);

        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [i],
          [],
          createRange(start + 1, i)
        );
        i += 1;
      }
      j += 1;
    }

    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    swap(array, start, i - 1);

    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    return i - 1;
  }

  function recursiveQuickSort(array, start, end) {
    if (start >= end) {
      if (start === end) {
        addToTrace(trace, array, [...lastSorted(trace), start]);
      }
      return null;
    }
    let pivot = choosePivot(array, start, end);
    addToTrace(trace, array, lastSorted(trace), [pivot]);
    swap(array, start, pivot);
    addToTrace(trace, array, lastSorted(trace), [pivot]);
    pivot = partition(array, start, end);
    addToTrace(trace, array, [...lastSorted(trace), pivot]);
    recursiveQuickSort(array, start, pivot - 1);
    recursiveQuickSort(array, pivot + 1, end);
  }
  recursiveQuickSort(nums, 0, nums.length - 1);
  return trace;
};



export default QuickSort;
