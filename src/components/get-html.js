import React, { useRef, useState } from "react";

const GetHtml = () => {
  const [query, setQuery] = useState();

  const refInput = useRef();

  function handleText(ev) {
    setQuery(ev.target.value);
  }

  function handleHtml() {
    getDataText();
  }

  async function getDataText() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", query, true);
    httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.onerror = function (XMLHttpRequest) {
      console.log("The data failed to load :(");
      console.log(JSON.stringify(XMLHttpRequest));
    };
    httpRequest.onload = function () {
      console.log("SUCCESS!");
    };
  }

  return (
    <div className="GetHtml">
      <input
        type="text"
        placeholder="Ingresar Link"
        ref={refInput}
        defaultValue={query}
        onChange={handleText}
      />
      <button onClick={handleHtml}>Abrir</button>
    </div>
  );
};

export default GetHtml;
