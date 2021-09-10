import React from "react";
import propTypes from "prop-types";

import iconGS from "../../public/assets/icon-gs.svg";
import iconGD from "../../public/assets/icon-gd.svg";
import iconSlides from "../../public/assets/icon-slides.svg";
import iconGP from "../../public/assets/icon-gp.png";
import iconGM from "../../public/assets/icon-gm.png";
import iconPW from "../../public/assets/paginaweb.png";

const Document = ({ title, link, fileType }) => (
  <div className="Document">
    <div className="DocumentHeader">
      <h2 className="DocumentHeader__title">{title}</h2>
    </div>
    <div className="DocumentBody">
      <img
        src={
          fileType === "gs"
            ? iconGS
            : fileType === "gd"
            ? iconGD
            : fileType === "gs"
            ? iconSlides
            : fileType === "gp"
            ? iconGP
            : fileType === "gm"
            ? iconGM
            : fileType === "pw"
            ? iconPW
            : null
        }
        width={65}
        alt="Google File"
      />
    </div>
    <div className="DocumentFooter">
      <a
        className="DocumentFooter__btn"
        href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        Abrir documento
      </a>
    </div>
  </div>
);

export default Document;

Document.propTypes = {
  title: propTypes.string,
  link: propTypes.string,
  fileType: propTypes.string,
};
