import React from "react";
import FrameGraphic from "../components/frame-graphic";

const deudaTecnicaSeguimiento = () => {
  return (
    <div className="Home PageView">
      <h1 className="MainContent__title">Deuda Técnica Seguimiento</h1>
      <div className="Graphic">
        <FrameGraphic source="https://datastudio.google.com/embed/reporting/df6363fd-9a36-4799-83f8-1484f0cee5e3/page/WzsvB" />
      </div>
    </div>
  );
};

export default deudaTecnicaSeguimiento;
