import React from "react";
import FrameGraphic from "../components/frame-graphic";

const TableroMallas = () => {
  return (
    <div className="Home PageView">
      <h1 className="MainContent__title">Tablero Mallas</h1>
      <div className="Graphic">
        <FrameGraphic source="https://datastudio.google.com/embed/reporting/62865e8e-fad8-4361-9186-583aba6ff78f?s=mXnToHOhs50" />
      </div>
    </div>
  );
};

export default TableroMallas;
