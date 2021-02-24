import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const CardFunction = ({ title, icon, source }) => {
  return (
    <section className="CardFunction">
      <header className="CardFunctionHeader">
        <h2 className="CardFunctionHeader__title">{title}</h2>
        <p className="CardFunctionHeader__subtitle">
          Mensaje acerca de la funcionalidad.
        </p>
      </header>
      <div className="CardFunctionImage">
        <img src={icon} width={100} alt="cardAccess" />
      </div>
      <div className="CardFunctionFooter">
        <Link className="CardFunctionFooterPlay" to={source}>
          <i className="fa fa-play-circle CardFunctionFooterPlay__icon"></i>
        </Link>
      </div>
    </section>
  );
};

export default CardFunction;

CardFunction.propTypes = {
  title: propTypes.string,
  icon: propTypes.string,
  source: propTypes.string,
};
