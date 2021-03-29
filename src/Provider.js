import React, { useRef, useContext, useState, createContext } from "react";
import {
  BOARD,
  KEYS,
  DELAY_NORMAL,
  NODE_INITIAL,
  NODE_FIXED,
  NODE_CLICKED,
  BOARD_ROW,
  BOARD_COL,
} from "./helpers/constants.js";
import Timer from "./helpers/algorithms/Timer";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [isPathExist, setIsPathExist] = useState(true);
  const [isVisualized, setIsVisualized] = useState(false);
  const [isHelped, setIsHelped] = useState(false);
  const begin = useRef({ x: Math.round(BOARD_ROW / 2), y: 2 });
  const end = useRef({ x: Math.round(BOARD_ROW / 2), y: BOARD_COL - 3 });
  const board = useRef(JSON.parse(JSON.stringify(BOARD)));
  const setItemCache = useRef({});
  const pathFinder = useRef(null);
  const delay = useRef(DELAY_NORMAL);
  const updateItem = (ridx, cidx, type = NODE_FIXED, timeFactor = 0) => {
    board.current[ridx][cidx] = type;
    const setItem = setItemCache.current[KEYS[ridx][cidx]];
    if (timeFactor) {
      const timer = new Timer({
        callback: () => setItem(type),
        delay: timeFactor * delay.current,
      });
      pathFinder.current.timers.push(timer);
    } else {
      setItem(type);
    }
  };
  const clear = () => {
    if (!isPathExist) setIsPathExist(true);
    if (isVisualized) setIsVisualized(false);
    const currentBoard = board.current;
    currentBoard.forEach((row, ridx) => {
      row.forEach((item, cidx) => {
        updateItem(ridx, cidx, NODE_INITIAL);
      });
    });
  };

  const clearPath = () => {
    board.current.forEach((row, ridx) => {
      row.forEach((item, cidx) => {
        if (board.current[ridx][cidx] !== NODE_CLICKED) {
          updateItem(ridx, cidx, NODE_INITIAL);
        }
      });
    });
  };

  return (
    <Context.Provider
      value={{
        // States
        isPathExist,
        isVisualized,
        isHelped,

        // Methods
        clear,
        clearPath,
        updateItem,
        setIsPathExist,
        setIsVisualized,
        setIsHelped,

        // Refs
        pathFinder,
        begin,
        end,
        board,
        setItemCache,
        delay,
      }}
    >
      {children}
    </Context.Provider>
  );
};

