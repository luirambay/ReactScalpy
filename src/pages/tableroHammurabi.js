import React from "react";
import FrameGraphic from "../components/frame-graphic";

const TableroHammurabi = () => {
  return (
    <div className="Home PageView">
      <h1 className="MainContent__title">Tablero Hammurabi</h1>
      <div className="Graphic">
        <FrameGraphic source="https://datastudio.google.com/embed/reporting/7438866b-8a9a-47f0-ab4f-b81e1e74afe8" />
      </div>
    </div>
  );
};

export default TableroHammurabi;
