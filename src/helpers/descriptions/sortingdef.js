export const sortingdef = [
  {
    name: "Bubble Sort",
    desc:
      "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements 'bubble' to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems.",
    performance: {
      worst_case: "O(n^2)",
      average_time: "O(n^2)",
      best_time: "O(n)",
      worst_space: "O(1)",
    },
  },
  {
    name: "Selection Sort",
    desc:
      "Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.",
    performance: {
      worst_case: "O(n^2)",
      average_time: "O(n^2)",
      best_time: "O(n^2)",
      worst_space: "O(1)",
    },
  },
  {
    name: "Insertion Sort",
    desc:
      "Insertion Sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.",
    performance: {
      worst_case: "O(n^2)",
      average_time: "O(n^2)",
      best_time: "O(n)",
      worst_space: "O(1)",
    },
  },
  {
    name: "Merge Sort",
    desc:
      "Merge Sort is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Divide the unsorted list into n sublists, each containing one element(a list of one element is considered sorted). Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.",
    performance: {
      worst_case: "O(nlog(n))",
      average_time: "O(nlog(n))",
      best_time: "O(nlog(n))",
      worst_space: "O(n)",
    },
  },
  {
    name: "Quick Sort",
    desc:
      "Quick Sort is an efficient, in-place sorting algorith that in practice is faster than MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning that the relative positioning of equal sort items is not preserved.Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. ",
    performance: {
      worst_case: "O(n^2)",
      average_time: "O(nlog(n))",
      best_time: "O(nlog(n))",
      worst_space: "O(log(n))",
    },
  },
  {
    name: "Heap Sort",
    desc:
      "Heap Sort can be thought of as an improved selection sort that uses the heap data structure rather than a linear-time search to find the maximum or minimum element. It is an in-place sorting algorithm that is not stable and has a somewhat slower running time than Quicksort in practice.",
    performance: {
      worst_case: "O(nlog(n))",
      average_time: "O(nlog(n))",
      best_time: "O(nlog(n))",
      worst_space: "O(1)",
    },
  },
  {
    name: "Shell Sort",
    desc:
      "Shell Sort, also know as Shell's method is a generalization of insertion sort where elements gap distance apart are compared rather than adjacent elements. The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. Starting with far apart elements, it can move some out-of-place elements into position faster than a simple nearest neighbor exchange. The running time of Shellsort is heavily dependent on the gap sequence it uses. For many practical variants, determining their time complexity remains an open problem. It is in-place sorting algorithm that is not stable.",
    performance: {
      worst_case: "O(n^2)",
      average_time: "O(n^(3/2))",
      best_time: "O(nlog(n))",
      worst_space: "O(1)",
    },
  },
];
