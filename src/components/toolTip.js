import React from "react";
import propTypes from "prop-types";

const ToolTip = (props) => {
  return (
    <p className="msg-tooltip">
      <i className="fa fa-info-circle tooltip__info"></i>
      {props.message}
    </p>
  );
};

export default ToolTip;

ToolTip.propTypes = {
  message: propTypes.string,
};
