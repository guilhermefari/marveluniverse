import React from "react";

export default ({ size, row }: { size: number; row?: boolean }) => {
  const direction = row ? "width" : "height";
  return <div style={{ [direction]: `${size}px` }} />;
};
