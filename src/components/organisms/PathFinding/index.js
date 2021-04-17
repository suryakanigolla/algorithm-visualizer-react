import React, { useEffect, useContext } from "react";
import PathFindingHeader from "../../molecules/PathFindingHeader";
import Grid from "../../molecules/Grid";
import { Context } from "../../../Provider";
import { pathfindingdefs } from "../../../helpers/descriptions/pathfindingdef";
import "./style.scss";

const PathFinding = () => {
  const context = useContext(Context);
  const { isPathExist, clear } = context;
  console.log(pathfindingdefs);

  useEffect(() => {
    if (!isPathExist) {
      clear();
    }
  }, [isPathExist, clear]);

  const ColorCode = ({ color, text }) => {
    return (
      <div className="ColourCodes__Item">
        <div style={{ backgroundColor: color }}></div>
        <p>{text}</p>
      </div>
    );
  };

  const colors = [
    {
      color: "black",
      text: "End Points",
    },
    {
      color: "rgb(252, 186, 3)",
      text: "Wall",
    },
    {
      color: "rgb(117, 225, 255)",
      text: "Algorithm Path",
    },
    {
      color: "rgb(207, 37, 65)",
      text: "Solved Path",
    },
  ];

  return (
    <>
      <div className="PathFinding__Container">
        <div className="PathFinding">
          <h2 className="PathFinding__Title">PathFinding Visualization</h2>
          <PathFindingHeader />
          <Grid />
        </div>
        <div className="PathFinding__Extra">
          <div className="PathFinding__Extra__Legend">
            <h2 className="PathFinding__Extra__Legend__Title">Colour Codes</h2>
            <div className="PathFinding__Extra__Legend__ColourCodes">
              {colors.map((item, index) => (
                <ColorCode key={index} color={item.color} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PathFinding;
