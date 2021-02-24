import React, { useRef, useEffect, useState } from "react";

const SwitchMode = () => {
  const [modeActive, setModeActive] = useState(false);
  const [value, setValue] = useState(localStorage.getItem("dark-mode") || "");

  const switchButton = useRef();

  useEffect(() => {
    localStorage.setItem("dark-mode", value);
    valuesRefresh();
  }, [value]);

  function switchMode() {
    document.body.classList.toggle("dark");
    switchButton.current.classList.toggle("active");

    // Verificar si existe la class dark en BODY
    if (document.body.classList.contains("dark")) {
      setValue(true);
    } else {
      setModeActive(false);
      setValue(false);
    }
  }

  const valuesRefresh = () => {
    if (localStorage.getItem("dark-mode") === "true") {
      document.body.classList.add("dark");
      switchButton.current.classList.add("active");
      setModeActive(true);
    }
  };

  return (
    <div className="SwitchMode">
      <button
        className="SwitchMode__buttonToggle"
        ref={switchButton}
        onClick={switchMode}
      >
        <span className="SwitchMode__icon">
          <i className="fas fa-sun"></i>
        </span>
        <span className="SwitchMode__icon">
          <i className="fas fa-moon"></i>
        </span>
      </button>
      <small className="SwitchMode__text">
        {modeActive ? "Modo: Oscuro" : "Modo: Normal"}
      </small>
    </div>
  );
};

export default SwitchMode;
