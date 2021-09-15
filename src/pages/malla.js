import React from "react";
import FrameGraphic from "../components/frame-graphic";

import ToolTip from "../components/toolTip";

const ValidarMalla = () => {
  return (
    <div className="Home PageView">
      <div className="Graphic">
        <div className="GraphicHead">
          <ToolTip message="Revisar Manual Validador de Mallas" />
          <a
            href="https://docs.google.com/document/d/1AUitmYGKj9V32ijhU_eqJr0OZCTLyIEQHmL8H1LKR0Y/edit?ts=60de4db0"
            target="blank"
            className="btn-manual"
          >
            Manual
          </a>
        </div>
        <FrameGraphic source="https://script.google.com/a/bbva.com/macros/s/AKfycbyDsSyft-rmEgRVvJ_BqsF0pCvc9pe-tK-K-bFri8MPjz_dEHo/exec" />
      </div>
    </div>
  );
};

export default ValidarMalla;
