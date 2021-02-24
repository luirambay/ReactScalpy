import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

import iconGraph from "../../public/assets/icon-graph.svg";

const BoxGraphics = (props) => {
  return (
    <section className="Card">
      <div className="CardHeader">
        <h2 className="CardHeader__title">{props.title}</h2>
      </div>
      <div className="CardImage">
        <img
          className="CardImage__img"
          src={iconGraph}
          width={65}
          alt="Graphic"
        />
      </div>
      <div className="CardFooter">
        <Link className="CardFooter__btn btnSuccess" to={props.source}>
          Ver Gráfico
        </Link>
      </div>
    </section>
  );
};

export default BoxGraphics;

BoxGraphics.propTypes = {
  title: propTypes.string,
  iconCover: propTypes.string,
  source: propTypes.string,
};
