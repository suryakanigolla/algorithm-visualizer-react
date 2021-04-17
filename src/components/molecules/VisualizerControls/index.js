import React from "react";
import "./style.scss";

import Button from "../../atoms/Button";

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

      <div className="AppControls__Select">
        <select
          onChange={(e) => onAdjustSpeed(e)}
          defaultValue={`${playbackSpeed}x`}
          placeholder="Speed"
          className="VisualizerControls__SpeedButton"
        >
          <option value="0.25x">0.25x</option>
          <option value="0.5x">0.5x</option>
          <option value="1x">1x</option>
          <option value="2x">2x</option>
          <option value="4x">4x</option>
        </select>
      </div>
    </div>
  );
};

export default VisualizerControls;
