import React from "react";
import ToolTip from "../components/ToolTip";
import propTypes from "prop-types";

function ValueTextArea({ valueTextArea }) {
  return (
    <div className="VerifiedIngestaEntryTextArea">
      <ToolTip message="Insertar codigo" />
      <textarea
        name="code"
        cols="0"
        onChange={(ev) => {
          valueTextArea(ev);
        }}
      ></textarea>
    </div>
  );
}

ValueTextArea.propTypes = {
  valueTextArea: propTypes.func,
};

export default ValueTextArea;
