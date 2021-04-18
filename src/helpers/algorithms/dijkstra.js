import PriorityQueue from "priorityqueuejs";
import {
  BOARD_ROW,
  BOARD_COL,
  NODE_CLICKED,
  NODE_VISITED,
} from "../constants.js";
import PathFinder from "./pathFinder";

export default class Dijkstra extends PathFinder {
  constructor(args) {
    super(args);
    // this.pq = new PriorityQueue<Object>({ comparator: (a, b) => a.d - b.d });
    this.pq = new PriorityQueue(function (a, b) {
      return a.d - b.d;
    });
  }

  clear() {
    this.pq.forEach(() => this.pq.deq());
  }

  execute = () => {
    const { pq, dist, prev, board, begin, end, updateItem } = this;

    pq.enq({ x: begin.x, y: begin.y, d: 0 });
    let find = false;
    while (pq.size()) {
      const current = pq.peek();
      pq.deq();
      const currentX = current.x;
      const currentY = current.y;
      const currentD = current.d;

      for (let i = 0; i < PathFinder.dx.length; i++) {
        const nextX = currentX + PathFinder.dx[i];
        const nextY = currentY + PathFinder.dy[i];

        if (nextX < 0 || nextX >= BOARD_ROW || nextY < 0 || nextY >= BOARD_COL)
          continue;
        if (
          dist[currentX][currentY] === Infinity ||
          dist[currentX][currentY] + 1 >= dist[nextX][nextY]
        )
          continue;
        if (board[nextX][nextY] === NODE_CLICKED) continue;

        board[nextX][nextY] = NODE_VISITED;
        updateItem(nextX, nextY, NODE_VISITED, currentD);
        prev[nextX][nextY] = { x: currentX, y: currentY };

        if (nextX === end.x && nextY === end.y) {
          find = true;
          break;
        }

        dist[nextX][nextY] = dist[currentX][currentY] + 1;
        pq.enq({ x: nextX, y: nextY, d: dist[nextX][nextY] });
      }

      if (find) {
        this.clear();
        return true;
      }
    }
    this.clearTimers();
    return false;
  };
}
