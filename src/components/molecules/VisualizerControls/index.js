import React from "react";
import "./style.scss";

import Button from "../../atoms/Button";
import Menu from "../Menu";

function isDisabled(action, disabled = false) {
  return action === undefined || disabled;
}

const VisualizerControls = ({
  onPlay,
  onPause,
  onAdjustSpeed,

  playing,
  playDisabled,
  pauseDisabled,
  playbackSpeed,
}) => {
  return (
    <div className="VisualizerControls">
      <Button
        onClick={playing ? onPause : onPlay}
        disabled={
          playing
            ? isDisabled(onPause, pauseDisabled)
            : isDisabled(onPlay, playDisabled)
        }
      >
        {playDisabled ? "Play" : playing ? "Pause" : "Play"}
      </Button>

      <Menu
        items={["0.25x", "0.5x", "1x", "2x", "4x"]}
        placeholder="Speed"
        selected={`${playbackSpeed}x`}
        onSelect={onAdjustSpeed}
        noDropIcon
        className="VisualizerControls__SpeedButton"
      />
    </div>
  );
};

export default VisualizerControls;
