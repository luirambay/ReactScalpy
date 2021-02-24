import React from "react";
import propTypes from "prop-types";

const InputFile = ({ title, valueInput }) => {
  return (
    <div className="InputFile">
      <label className="InputFile__title">{title}</label>
      <input
        type="text"
        className="InputFile__input"
        value={valueInput}
        disabled
      />
    </div>
  );
};

export default InputFile;

InputFile.propTypes = {
  title: propTypes.string,
  valueInput: propTypes.string,
};
