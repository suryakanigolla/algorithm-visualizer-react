import React, { useEffect, useContext } from "react";
import PathFindingHeader from "../../molecules/PathFindingHeader";
import Grid from "../../molecules/Grid";
import { Context } from "../../../Provider";
import { pathfindingdefs } from "../../../helpers/descriptions/pathfindingdef";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Particles from "react-particles-js"
import {particleConfig} from "../../../helpers/particlesjs-config"
import "react-tabs/style/react-tabs.css";
import "./style.scss";

const PathFinding = () => {
  const context = useContext(Context);
  const { isPathExist, clear } = context;

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
        <div className="PathFinding__Bg">
          <Particles params={particleConfig} />
        </div>
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
          <div className="PathFinding__Extra__Description">
            <Tabs>
              <TabList>
                {pathfindingdefs.map((item, index) => (
                  <Tab key={index}>{item.name}</Tab>
                ))}
              </TabList>
              {pathfindingdefs.map((item, index) => (
                <TabPanel key={index}>
                  <div className="PathFinding__Extra__Description__Item">
                    <h2>{item.name}</h2>
                    <div>
                      <p>{item.desc}</p>
                    </div>
                    <div>
                      {Object.keys(item.performance).map((key, index) => (
                        <p key={index} style={{ marginBottom: "0px" }}>
                          <span>{key}: </span>
                          <span>{item.performance[key]}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default PathFinding;
