import { v4 as uuidv4 } from 'uuid';

export var BOARD_ROW = Number("15");
export var BOARD_COL = Number("15");

if (window.innerWidth < 430) {
  BOARD_ROW = 6;
  BOARD_COL = 8;
}
else if (window.innerWidth < 610) {
  BOARD_ROW = 10;
  BOARD_COL = 10;
}
else if (window.innerWidth < 820) {
  BOARD_ROW = 15
  BOARD_COL = 15
}


//Node states
export const NODE_FIXED = 'NODE_FIXED';
export const NODE_INITIAL = 'NODE_INITIAL';
export const NODE_VISITED = 'NODE_VISITED';
export const NODE_CLICKED = 'NODE_CLICKED';
export const NODE_SHORTEST = 'NODE_SHORTEST';



// Color
export const INITIAL_COLOR = "#a1a6a3";
export const VISITED_COLOR = "#75e1ff";
export const CLICKED_COLOR = "#fcba03";
export const FIXED_COLOR = "#000000";
export const SHORTEST_COLOR = "#cf2541";
export const COLOR_TYPES = [
  'initial',
  'visited',
  'clicked',
  'fixed',
  'shortest',
];

// algorithm
export const DIJKSTRA = 'dijkstra';
export const BELLMAN_FORD = 'bellman-ford';
export const A_STAR = 'A-star';
export const DFS = 'DFS';
export const BFS = 'BFS';

export const DELAY_SLOWEST = 550;
export const DELAY_SLOW = 450;
export const DELAY_NORMAL = 300;
export const DELAY_FAST = 150;
export const DELAY_FASTEST = 50;

// uuid
export const KEYS = [];
for (let i = 0; i < BOARD_ROW; i++) {
  KEYS[i] = [];
  for (let j = 0; j < BOARD_COL; j++) {
    KEYS[i][j] = uuidv4();
  }
}


export const BOARD = [];
for (let i = 0; i < BOARD_ROW; i++) {
  BOARD[i] = [];
  for (let j = 0; j < BOARD_COL; j++) {
    BOARD[i][j] = {
      color: INITIAL_COLOR,
      visit: false,
    };
  }
}
