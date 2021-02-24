import React from "react";
import propTypes from "prop-types";

const FrameGraphic = (props) => {
  return (
    <iframe className="iframes"
      src={props.source}
    ></iframe>
  );
};

export default FrameGraphic;

FrameGraphic.propTypes = {
  source: propTypes.string,
};
