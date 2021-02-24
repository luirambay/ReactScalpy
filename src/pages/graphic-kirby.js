import React from "react";
import FrameGraphic from "../components/frame-graphic";

const GraphicKirby = () => {
  return (
    <div className="Home PageView">
      <h1 className="MainContent__title">Seguimiento Pull Request</h1>
      <section className="Graphic">
        <FrameGraphic source="https://datastudio.google.com/embed/reporting/1JX9LulQEdbZWgVIeYKs94ziHjXVEmELk/page/D2yBB" />
      </section>
    </div>
  );
};

export default GraphicKirby;
