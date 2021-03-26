import React from "react";
import Box from "./Box";

const Main = () => {
  return (
    <main>
      <div>
        <Box name="Margit" age="25" title="CEO" />
        <Box name="Kati" age="22" title="designer" />
        <Box name="Mari" age="27" title="developer" />
      </div>
    </main>
  );
};

export default Main;
