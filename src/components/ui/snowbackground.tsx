"use client";
import Snowfall from "react-snowfall";

function SnowBackground() {
  return (
    <Snowfall
      color="#fff"
      style={{ background: "#212121" }}
      snowflakeCount={100}
    />
  );
}

export default SnowBackground;
