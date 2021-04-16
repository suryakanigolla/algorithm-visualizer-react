import React, { useState, useContext } from "react";
import {
  DIJKSTRA,
  BELLMAN_FORD,
  A_STAR,
  DFS,
  BFS,
  DELAY_SLOWEST,
  DELAY_SLOW,
  DELAY_NORMAL,
  DELAY_FAST,
  DELAY_FASTEST,
} from "../../../helpers/constants";
import { Context } from "../../../Provider";
import PathFinder from "../../../helpers/algorithms/index";
import Button from "../../atoms/Button";
import { FaPause, FaPlay } from "react-icons/fa";
import "./style.scss";

const PathFindingHeader = () => {
  const [type, setType] = useState(DIJKSTRA);
  const [pause, setPause] = useState(false);
  const context = useContext(Context);
  const {
    begin,
    end,
    updateItem,
    delay,
    pathFinder,
    clear,
    clearPath,
    board,
    isVisualized,
    setIsPathExist,
    setIsVisualized,
    setIsHelped,
  } = context;

  const onAlgoChange = (e) => {
    setType(e.target.value);
  };

  const onDelayChange = (e) => {
    delay.current = Number(e.target.value);
  };

  const onVisualize = () => {
    if (isVisualized) return;
    clearPath();
    setIsVisualized(true);

    pathFinder.current = new PathFinder[type]({
      begin: begin.current,
      end: end.current,
      updateItem,
      board: board.current,
    });
    const isPossiblePath = pathFinder.current.execute();
    setIsPathExist(isPossiblePath);
  };

  const onClearAll = () => {
    if (isVisualized && !pause) return;
    if (pause) setPause(false);
    setIsVisualized(false);

    clear();
  };

  const onClearPath = () => {
    if (isVisualized && !pause) return;
    if (pause) setPause(false);
    setIsVisualized(false);

    clearPath();
  };

  const onPause = () => {
    if (pause) {
      setPause(false);
      pathFinder.current.resumeTimers();
    } else {
      setPause(true);
      pathFinder.current.stopTimers();
    }
  };

  const onHelp = () => {
    setIsHelped(true);
  };

  return (
    <div className="PathFindingHeader">
      <select
        className="PathFindingHeader__Select PathFindingHeader__Item"
        onChange={onAlgoChange}
        id="algorithm"
        disabled={isVisualized}
      >
        <option value={DIJKSTRA} defaultChecked>
          Dijkstra
        </option>
        <option value={BELLMAN_FORD}>Bellman-Ford</option>
        <option value={BFS}>0-1 BFS</option>
        <option value={DFS}>DFS</option>
        <option value={A_STAR}>A*</option>
      </select>
      <select
        className="PathFindingHeader__Select PathFindingHeader__Item"
        onChange={onDelayChange}
        defaultValue={300}
        disabled={isVisualized}
      >
        <option value={DELAY_SLOW}>slowest</option>
        <option value={DELAY_SLOWEST}>slow</option>
        <option value={DELAY_NORMAL}>normal</option>
        <option value={DELAY_FAST}>fast</option>
        <option value={DELAY_FASTEST}>fastest</option>
      </select>
      <Button
        onClick={onVisualize}
        disabled={isVisualized}
        type="button"
      >Visualize</Button>
      <Button
        onClick={onClearAll}
        disabled={isVisualized && !pause}
        type="button"
      >Clear All</Button>
      <Button
        onClick={onClearPath}
        disabled={isVisualized && !pause}
        type="button"
      >Clear Path</Button>
      <Button
        onClick={onPause}
        disabled={!isVisualized}
        type="button"
      >{pause ? <FaPlay /> : <FaPause />}</Button>
    </div>
  );
};

export default PathFindingHeader;
