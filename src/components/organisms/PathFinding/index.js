import React, { useEffect, useContext, useState } from "react";
import PathFindingHeader from "../../molecules/PathFindingHeader";
import Grid from "../../molecules/Grid";
import { Context } from "../../../Provider";
import "./style.css";

const PathFinding = () => {
  const context = useContext(Context);
  const { isPathExist, clear, isHelped, setIsHelped } = context;
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  useEffect(() => {
    if (!isPathExist) {
      clear();
      setIsErrorOpen(true);
    }
  }, [isPathExist, clear]);

  const onErrorClose = () => {
    setIsErrorOpen(false);
  };
  const onHelpClose = () => {
    setIsHelped(false);
  };

  return (
    <>
      <div className="PathFinding__Container">
        <div className="PathFinding">
          <h2 className="PathFinding__Title">PathFinding Visualization</h2>
          <PathFindingHeader />
          <Grid />
        </div>
        <div className="PathFinding__Legend">
          <h2 className="PathFinding__Legend__Title">Colour Codes</h2>
          <div className="PathFinding__Legend__ColourCodes">
            <div className="ColourCodes__Item">
              <div className="ColourCodes__Item__Colour Black"></div>
              <p className="ColourCodes__Item__Meaning">End Points</p>
            </div>
            <div className="ColourCodes__Item">
              <div className="ColourCodes__Item__Colour Yellow"></div>
              <p className="ColourCodes__Item__Meaning">Wall</p>
            </div>
            <div className="ColourCodes__Item">
              <div className="ColourCodes__Item__Colour Blue"></div>
              <p className="ColourCodes__Item__Meaning">Algorithm Path</p>
            </div>
            <div className="ColourCodes__Item">
              <div className="ColourCodes__Item__Colour Red"></div>
              <p className="ColourCodes__Item__Meaning">Solved Path</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PathFinding;
