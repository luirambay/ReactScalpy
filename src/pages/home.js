import React from "react";
import CardFunction from "../components/card-function";

import iconHome from "../../public/assets/icon-repoHome.svg";
import iconGraphic from "../../public/assets/icon-graphHome.svg";
import iconProject from "../../public/assets/icon-projectHome.svg";
import iconValidate from "../../public/assets/icon-validateHome.svg";

const Home = () => {
  const dataCard = [
    {
      title: "Repositorios",
      icon: iconHome,
      source: "/repository",
      id: 1,
    },
    {
      title: "Gráficos",
      icon: iconGraphic,
      source: "/graphics",
      id: 2,
    },
    {
      title: "Proyectos",
      icon: iconProject,
      source: "/project",
      id: 3,
    },
    {
      title: "Validar Ingestas",
      icon: iconValidate,
      source: "/check",
      id: 4,
    },
  ];

  return (
    <section className="Home PageView">
      <h1 className="Home__title">Welcome</h1>
      <section className="HomeCardFunctions">
        {dataCard.map(({ title, icon, source, id }) => (
          <CardFunction key={id} title={title} icon={icon} source={source} />
        ))}
      </section>
    </section>
  );
};

export default Home;
