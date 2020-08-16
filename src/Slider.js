import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Range = Slider.createSliderWithTooltip(Slider.Range);

export default ({ min, max, onChange }) => (
  <>
    <Range min={min} max={max} onChange={onChange} />
  </>
);