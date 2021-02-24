import React from "react";

import Card from "../components/card";

const Graphics = () => {
  return (
    <section className="Graphics PageView">
      <h1 className="MainContent__title">Gráficos</h1>
      <section className="GraphicsCards">
        <Card title="Seguimiento de Pull Request" source="/graphics/pr" />
        <Card
          title="Observaciones en Pull Request"
          source="/graphics/ingestas"
        />
      </section>
    </section>
  );
};

export default Graphics;
