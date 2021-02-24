import React from "react";
import ImageHome from "../../public/assets/ImageHome.svg";
import FlagCountry from "../../public/assets/flagCountry.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePageContent">
        <div className="HomePageContent__flag">
          <img src={FlagCountry} alt="Perú" />
        </div>
        <h1 className="HomePageContent__title">
          BBVA
          <span className="HomePageContent__titleSecundary">
            DATA QUALITY ASSURANCE
          </span>
        </h1>
        <Link className="HomePageContent__btn" to="/home">
          Ingresar
        </Link>
      </div>
      <div className="HomePageImage">
        <img src={ImageHome} alt="ImageHome" width="100%" />
      </div>
    </div>
  );
};

export default HomePage;
