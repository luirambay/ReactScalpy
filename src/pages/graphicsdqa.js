import React from "react";

import Card from "../components/card";

const GraphicsDQA = () => {
  return (
    <section className="Graphics PageView">
      <h1 className="MainContent__title">Dashboards DQA</h1>
      <section className="GraphicsCards">
        <Card title="Seguimiento DQA" source="/graphicsdqa/seguimientoDQA" />
      </section>
    </section>
  );
};

export default GraphicsDQA;
