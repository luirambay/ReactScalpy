import React from "react";
import propTypes from "prop-types";

import iconGS from "../../public/assets/icon-gs.svg";
import iconGD from "../../public/assets/icon-gd.svg";
import iconSlides from "../../public/assets/icon-slides.svg";

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
            : fileType === "gp"
            ? iconSlides
            : null
        }
        width={65}
        alt="Google Sheet Document"
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
