import React, { useContext, useState, useRef } from "react";
import {Context} from "../../../Provider";
import {
  KEYS,
  BOARD,
  NODE_CLICKED,
  NODE_INITIAL,
} from "../../../helpers/constants.js";
import Node from "../../atoms/Node";
import "./style.css";

const Grid = () => {
  const context = useContext(Context);
  const { updateItem, begin, end, isVisualized } = context;
  const [clicking, setClicking] = useState(false);
  const [dragging, setDragging] = useState({
    begin: false,
    end: false,
  });
  const clickPos = useRef({ x: -1, y: -1 });

  const onMouseDown = (e) => {
    const ridx = Number(e.target.dataset.ridx);
    const cidx = Number(e.target.dataset.cidx);

    if (ridx === begin.current.x && cidx === begin.current.y) {
      setDragging({ begin: true, end: false });
    } else if (ridx === end.current.x && cidx === end.current.y) {
      setDragging({ begin: false, end: true });
    } else {
      clickPos.current = { x: ridx, y: cidx };
      setClicking(true);
    }
  };
  const onMouseUp = () => {
    setClicking(false);
    setDragging({ begin: false, end: false });
  };

  const changeColor = (e, mouseMove) => {
    if (e.target.className !== "Node") return;
    const { type } = e.target.dataset;
    if (type !== NODE_INITIAL && type !== NODE_CLICKED) return;

    const ridx = Number(e.target.dataset.ridx);
    const cidx = Number(e.target.dataset.cidx);

    const itemType =
      type === NODE_CLICKED && !mouseMove ? NODE_INITIAL : NODE_CLICKED;
    updateItem(ridx, cidx, itemType);
  };

  const onClick = (e) => {
    if (isVisualized) return;
    changeColor(e, false);
  };

  const onMouseMove = (e) => {
    if (isVisualized) return;
    if (e.target.className !== "Node") return;
    const ridx = Number(e.target.dataset.ridx);
    const cidx = Number(e.target.dataset.cidx);

    if (dragging.begin || dragging.end) {
      const formerX = dragging.begin ? begin.current.x : end.current.x;
      const formerY = dragging.begin ? begin.current.y : end.current.y;

      updateItem(formerX, formerY, NODE_INITIAL);

      const next = { x: ridx, y: cidx };

      if (dragging.begin) {
        begin.current = next;
      } else {
        end.current = next;
      }

      updateItem(next.x, next.y);
    } else {
      if (!clicking) return;
      if (clickPos.current.x === ridx && clickPos.current.y === cidx) return;
      changeColor(e, true);
    }
  };

  return (
    <div
      className="Grid"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onClick={onClick}
      role="button"
      tabIndex="0"
    >
      {BOARD.map((row, ridx) => (
        <div className="Grid__Row" key={ridx}>
          {row.map((col, cidx) => (
            <Node ridx={ridx} cidx={cidx} key={KEYS[ridx][cidx]} />
          ))}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Grid;
