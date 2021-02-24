import React from "react";
import propTypes from "prop-types";
import ToolTip from "./ToolTip";

const UploadFile = (
  { msgToolTip, onUploadFile, labelName, inputName, isActiveUpload, style, typeFile },
  ref
) => {
  return (
    <div className="UploadFile">
      <label className={style} htmlFor={labelName}>
        Seleccionar Archivo
      </label>
      <input
        type="file"
        ref={ref}
        accept={typeFile}
        onChange={onUploadFile}
        id={inputName}
        style={{ display: "none" }}
        disabled={isActiveUpload ? false : true}
      />
      <ToolTip message={msgToolTip} />
    </div>
  );
};

export default React.forwardRef(UploadFile);

UploadFile.propTypes = {
  msgToolTip: propTypes.string,
  onUploadFile: propTypes.func,
  labelName: propTypes.string,
  inputName: propTypes.string,
  isActiveUpload: propTypes.bool,
  style: propTypes.string,
  typeFile: propTypes.string
};
