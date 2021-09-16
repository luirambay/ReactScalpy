import React from "react";

import Card from "../components/card";

const Graphics = () => {
  return (
    <section className="Graphics PageView">
      <h1 className="MainContent__title">Dashboards</h1>
      <section className="GraphicsCards">
        <Card title="Seguimiento de Pull Request" source="/graphics/pr" />
        <Card
          title="Observaciones en Pull Request"
          source="/graphics/ingestas"
        />
        <Card
          title="Iteraciones en Pull Request"
          source="/graphics/iteraciones"
        />
        <Card
          title="Deuda Técnica Stock Datio"
          source="/graphics/deudaTecnica"
        />
        {/*<Card
          title="Deuda Técnica DATIO : Seguimiento de stock de fuentes"
          source="/graphics/deudaTecnicaSeguimiento"
        />*/}
        <Card
          title="Observaciones por Tipología de error"
          source="/graphics/tipologias"
        />
      </section>
    </section>
  );
};

export default Graphics;
