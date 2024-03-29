import React from "react";

function Ring() {
  return (
    <svg
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect y="0.5" width="36" height="36" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image0" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0"
          width="64"
          height="64"
          xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default Ring;
