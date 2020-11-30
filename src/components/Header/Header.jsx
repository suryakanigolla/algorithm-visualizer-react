import React, { useState, useContext } from 'react';
import {
  DIJKSTRA,
  DELAY_NORMAL
} from 'constants.js';
import { Context } from 'Provider';
import PathFinder from 'algorithms/index';
import { FaPause, FaPlay } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
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


  return (
    <div className="content-header">
      <select
        className="content-header__select"
        onChange={onAlgoChange}
        id="algorithm"
        disabled={isVisualized}
      >
        <option value={DIJKSTRA} defaultChecked>
          Dijkstra
        </option>
      </select>
      <select
        className="content-header__select"
        onChange={onDelayChange}
        defaultValue={300}
        disabled={isVisualized}
      >  
        <option value={DELAY_NORMAL}>normal</option>
      </select>
      <button
        className="content-header__button"
        onClick={onVisualize}
        disabled={isVisualized}
        type="button"
      >
        Visualize!
      </button>
      <button
        className="content-header__button"
        onClick={onClearAll}
        disabled={isVisualized && !pause}
        type="button"
      >
        Clear All
      </button>
      <button
        className="content-header__button"
        onClick={onClearPath}
        disabled={isVisualized && !pause}
        type="button"
      >
        Clear Path
      </button>
      <button
        className="content-header__button--pause"
        onClick={onPause}
        disabled={!isVisualized}
        type="button"
      >
        {pause ? <FaPlay /> : <FaPause />}
      </button>
    </div>
  );
};

export default Header;
