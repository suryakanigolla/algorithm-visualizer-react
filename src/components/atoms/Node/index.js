import React, { useState, useContext, useEffect } from "react";
import {Context} from "../../../Provider";
import {
  INITIAL_COLOR,
  VISITED_COLOR,
  KEYS,
  FIXED_COLOR,
  NODE_INITIAL,
  NODE_VISITED,
  NODE_CLICKED,
  CLICKED_COLOR,
  NODE_SHORTEST,
  SHORTEST_COLOR,
} from "../../../helpers/constants.js";
import "./style.scss";

const Node = ({ ridx, cidx }) => {
  const [type, setType] = useState(NODE_INITIAL);
  const { setItemCache, begin, end, pathFinder, setIsVisualized } = useContext(
    Context
  );

  setItemCache.current[KEYS[ridx][cidx]] = setType;

  useEffect(() => {
    if (
      type === NODE_VISITED &&
      ridx === end.current.x &&
      cidx === end.current.y
    ) {
      pathFinder.current.paintShortestPath();
    }
  }, [type, end, pathFinder, ridx, cidx]);

  useEffect(() => {
    if (
      type === NODE_SHORTEST &&
      ridx === end.current.x &&
      cidx === end.current.y
    ) {
      pathFinder.current.clearTimers();
      setIsVisualized(false);
    }
  }, [type, end, pathFinder, ridx, cidx, setIsVisualized]);

  const getColor = () => {
    if (
      (ridx === begin.current.x && cidx === begin.current.y) ||
      (ridx === end.current.x && cidx === end.current.y)
    ) {
      return FIXED_COLOR;
    }
    if (type === NODE_VISITED) {
      return VISITED_COLOR;
    }
    if (type === NODE_CLICKED) {
      return CLICKED_COLOR;
    }
    if (type === NODE_SHORTEST) {
      return SHORTEST_COLOR;
    }
    return INITIAL_COLOR;
  };

  return (
    <div
      className="Node"
      data-type={type}
      data-ridx={ridx}
      data-cidx={cidx}
      style={{
        backgroundColor: getColor(),
      }}
    />
  );
};

export default Node;
