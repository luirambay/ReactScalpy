import React, { useState } from "react";
import { listIngestas } from "../constants/Dictionary";

function searchIngesta() {
  const [valueId, setValueId] = useState("");

  function handleQuery(ev) {
    const id = ev.target.value;

    for (let ingesta in listIngestas) {
      if (id === listIngestas[ingesta]) {
        const result = ingesta;
        setValueId(result);
      }
    }
  }

  function redirectPage() {
    const url = `http://datadictionary.bbva.com/data_dictionary_next_gen/object/${valueId}/`;
    window.open(url, "_blank");
  }

  return (
    <div className="searchIngesta">
      <input
        className="searchIngesta__input"
        type="text"
        onChange={(ev) => {
          handleQuery(ev);
        }}
      />
      <button className="searchIngesta__btn" onClick={redirectPage}>
        Buscar Tabla
      </button>
    </div>
  );
}

export default searchIngesta;
