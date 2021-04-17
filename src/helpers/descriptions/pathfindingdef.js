export const pathfindingdefs = [
  {
    name: "Dijkstra",
    desc:
      "Dijkstra's algorithm is a step-by-step process we can use to find the shortest path between two vertices in a weighted graph. This algorithm enables us to find shortest distances and minimum costs, making it a valuable tool.",
    performance: {
      time: "O(Elog(V))",
      space: "O(V)"
    },
  },
  {
    name: "Bellman-Ford",
    desc:
      "The Bellman–Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph.[1] It is slower than Dijkstra's algorithm for the same problem, but more versatile, as it is capable of handling graphs in which some of the edge weights are negative numbers. Bellman–Ford proceeds by relaxation, in which approximations to the correct distance are replaced by better ones until they eventually reach the solution.",
    performance: {
      time: "O(E)",
      space: "O(V)"
    },
  },
  {
    name: "BFS",
    desc:
      "Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a search key), and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.",
    performance: {
      time: "O(V + E)",
      space: "O(V)"
    },
  },
  {
    name: "DFS",
    desc:
      "Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.",
    performance: {
      time: "O(V + E)",
      space: "O(V)"
    },
  },
  {
    name: "A-Star",
    desc:
      "A* is an informed search algorithm, or a best-first search, meaning that it is formulated in terms of weighted graphs: starting from a specific starting node of a graph, it aims to find a path to the given goal node having the smallest cost (least distance travelled, shortest time, etc.). It does this by maintaining a tree of paths originating at the start node and extending those paths one edge at a time until its termination criterion is satisfied.",
    performance: {
      time: "O(E)",
      space: "O(V)"
    },
  },
];
