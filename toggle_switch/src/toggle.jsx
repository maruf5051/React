import "./toggle.css";
import { useState } from "react";

export const ToggleSwitch = () => {
  const [isOn, setOn] = useState(false);

  const handleToggle = () => {
    setOn(!isOn);
  };

  const switchState = isOn ? "on" : "off";
  const bgColor = { backgroundColor: isOn ? "#4caf50" : "" };

  return (
    <div className="toggle-switch" style={bgColor} onClick={handleToggle}>
      <div className={`switch ${switchState}`}>
        <span className="switch-state">{switchState}</span>
      </div>
    </div>
  );
};
