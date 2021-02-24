import React, { useState, useRef } from "react";
import { sliceText } from "../functions/formatedText";

import UploadFile from "../components/uploadFile";
import SearchIngesta from "../components/searchIngesta";
import ValueTextArea from "../components/valueTextArea";
import InputListValues from "../components/inputListValues";
import paintValue from "../functions/paintValue";

const parseHocon = require("hocon-parser");

const VerifiedIngesta = () => {
  const [dataHtml, setDataHtml] = useState({});
  const [dataHtmlActive, setDataHtmlActive] = useState(false);
  const [dataJson, setDataJson] = useState({});
  const [btnHtmlActive, setBtnHtmlActive] = useState(true);
  const [dataJsonActive, setDataJsonActive] = useState(false);
  const [dataJsonText, setDataJsonText] = useState("");
  const [buttonVerifyActive, setButtonVerifyActive] = useState(false);

  const preArea = useRef();
  const inputUpload = useRef();
  const inputUploadTwo = useRef();

  function handleUploadFileHtml() {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;

      const fileHtmlFormatted = sliceText(content, "{&quot", `]"`);
      const deleteCharacters = fileHtmlFormatted.replace(/&quot;/gi, '"');
      const fileLoadToJson = JSON.parse(deleteCharacters);

      setDataHtml(fileLoadToJson);
      setDataHtmlActive(true);
      setBtnHtmlActive(false);
      setDataJsonActive(true);
    };
    reader.readAsText(file);
  }

  function handleValueTextArea(ev) {
    const value = ev.target.value;
    const newFileLoad = value.replace(/[*?$]/g, " $&");
    const txtAreaConvertJson = parseHocon(newFileLoad);
    console.log(txtAreaConvertJson);

    setDataJson(txtAreaConvertJson);
    setDataJsonText(value);
    setDataJsonActive(true);
    setButtonVerifyActive(true);
  }

  function handleUploadFileConf(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileLoad = event.target.result;
      const newFileLoad = fileLoad.replace(/[*?$]/g, " $&");
      const fileLoadConvertJson = parseHocon(newFileLoad);

      setDataJson(fileLoadConvertJson);
      setDataJsonText(fileLoad);
      setDataJsonActive(true);
      setButtonVerifyActive(true);
    };
    reader.readAsText(file);
  }

  function filterNoAccept(valueNoAccept) {
    preArea.current.innerHTML = preArea.current.innerHTML.replace(
      valueNoAccept,
      `<span class="filterError">$&</span>`
    );
  }

  function printElement(element) {
    preArea.current.innerHTML = preArea.current.innerHTML.replace(
      element,
      `<span class="filterSuccess">$&</span>`
    );
  }

  function verificateResults() {
    // INPUT

    const getPropertyInputOptions = Object.getOwnPropertyNames(
      dataJson.kirby.input.options
    );

    const getPropertyInput = Object.getOwnPropertyNames(dataJson.kirby.input);

    if (getPropertyInput.includes("applyConversions")) {
      paintValue(
        dataJson.kirby.input.applyConversions.toString(),
        "false",
        dataJson.kirby.input.applyConversions.toString(),
        preArea
      );
    }

    if (getPropertyInputOptions.includes("castMode")) {
      paintValue(
        dataJson.kirby.input.options.castMode,
        "notPermissive",
        dataJson.kirby.input.options.castMode,
        preArea
      );
    }

    if (getPropertyInputOptions.includes("mode")) {
      paintValue(
        dataJson.kirby.input.options.mode,
        "FAILFAST",
        dataJson.kirby.input.options.mode,
        preArea
      );
    }

    if (getPropertyInputOptions.includes("charset")) {
      paintValue(
        dataJson.kirby.input.options.charset,
        dataJson.kirby.input.options.charset === "windows-1252"
          ? "windows-1252"
          : "UTF-8",
        dataJson.kirby.input.options.charset,
        preArea
      );
    }

    const newTextFormattedJson = sliceText(
      dataJson.kirby.input.paths[0],
      "/",
      "$"
    );

    const newTextFormattedHtml = sliceText(
      dataHtml.fields.source_path_name,
      "/",
      "_"
    );

    paintValue(
      newTextFormattedJson,
      newTextFormattedHtml,
      dataJson.kirby.input.paths[0],
      preArea
      //Source
    );

    paintValue(
      dataJson.kirby.input.paths[1],
      "?DATE",
      dataJson.kirby.input.paths[1],
      preArea
      //Source
    );

    if (getPropertyInputOptions.includes("force")) {
      filterNoAccept(`force = ${dataJson.kirby.output.force.toString()}`);
    }

    if (dataHtml.fields.physical_path_schema.includes("raw")) {
      paintValue(
        dataJson.kirby.input.type,
        dataJson.kirby.input.type === "fixed"
          ? "fixed"
          : dataJson.kirby.input.type
          ? "csv"
          : null,
        dataJson.kirby.input.type,
        preArea
      );
      paintValue(
        dataJson.kirby.output.type,
        dataJson.kirby.output.type === "avro" ? "avro" : null,
        dataJson.kirby.output.type,
        preArea
      );

      paintValue(
        dataJson.kirby.output.reprocess[1],
        "?DATE",
        dataJson.kirby.output.reprocess[1] + "}",
        preArea
      );

      // TRANSFORMATIONS - RAW

      dataJson.kirby.transformations.map((elements) => {
        if (Object.keys(elements).length === 2) {
          Object.getOwnPropertyNames(elements).map((el) => {
            switch (el) {
              case "type":
                printElement("setCurrentDate");
                break;
              case "field":
                printElement("audtiminsert_date");
                break;
              default:
                break;
            }
          });
        }
      });

      dataJson.kirby.transformations.map((elements) => {
        if (Object.keys(elements).length === 4) {
          Object.getOwnPropertyNames(elements).map((el) => {
            switch (el) {
              case "default":
                printElement("${?DATE}");
                filterNoAccept(" ${?REPROCESS_DATE}");
                break;
              case "defaultType":
                printElement("string");
                break;
              case "type":
                printElement("literal");
                break;
              case "field":
                printElement(`field="cutoff_date"`);
                printElement(`field = "cutoff_date"`);
                break;
              default:
                break;
            }
          });
        }
      });

      dataJson.kirby.transformations.map((elements) => {
        if (Object.keys(elements).length === 3) {
          Object.getOwnPropertyNames(elements).map((el) => {
            switch (el) {
              case "field":
                if (elements[el] === "audtiminsert_date") {
                  printElement(`field="audtiminsert_date"`);
                  printElement(`field = "audtiminsert_date"`);
                } else {
                  filterNoAccept(`field = "${elements[el]}"`);
                }
                break;
              case "type":
                if (elements[el] === "formatter") {
                  printElement(`formatter`);
                } else {
                  filterNoAccept(`${elements[el]}`);
                }
                break;
              case "typeToCast":
                if (elements[el] === "long") {
                  printElement(`long`);
                } else {
                  filterNoAccept(`${elements[el]}`);
                }
                break;
              default:
                break;
            }
          });
        }
      });
    }

    if (dataHtml.fields.physical_path_schema.includes("master")) {
      paintValue(
        dataJson.kirby.input.type,
        dataJson.kirby.input.type === "avro" ? "avro" : null,
        `=` + dataJson.kirby.input.type,
        preArea
      );
      paintValue(
        dataJson.kirby.output.type,
        dataJson.kirby.output.type === "parquet" ? "parquet" : null,
        dataJson.kirby.output.type,
        preArea
      );

      paintValue(
        dataJson.kirby.output.reprocess[1],
        "?REPROCESS_DATE",
        dataJson.kirby.output.reprocess[1] + "}",
        preArea
      );

      //TRANSFORMATIONS - MASTER

      dataJson.kirby.transformations.map((elements) => {
        if (Object.keys(elements).length === 4) {
          Object.getOwnPropertyNames(elements).map((el) => {
            switch (el) {
              case "default":
                printElement("${?DATE}");
                filterNoAccept(" ${?REPROCESS_DATE}");
                break;
              case "defaultType":
                printElement("string");
                break;
              case "type":
                printElement("literal");
                break;
              case "field":
                printElement(`field="cutoff_date"`);
                printElement(`field = "cutoff_date"`);
                break;
              default:
                break;
            }
          });
        }
      });

      dataJson.kirby.transformations.map((elements) => {
        if (Object.keys(elements).length === 2) {
          Object.getOwnPropertyNames(elements).map((el) => {
            switch (el) {
              case "type":
                printElement("setCurrentDate");
                break;
              case "field":
                printElement("audtiminsert_date");
                break;
              default:
                break;
            }
          });
        }
      });

      dataJson.kirby.transformations.map((elements) => {
        if (Object.keys(elements).length === 3) {
          Object.getOwnPropertyNames(elements).map((el) => {
            switch (el) {
              case "field":
                printElement(`field="cutoff_date"`);
                break;
              case "format":
                printElement(`yyyyMMdd`);
                break;
              case "type":
                printElement(`dateformatter`);
                break;
              default:
                break;
            }
          });
        }
      });
    }

    // // COMPARACION DE VALORES DE OUTPUT

    paintValue(
      dataJson.kirby.output.mode,
      "reprocess",
      dataJson.kirby.output.mode,
      preArea
    );

    paintValue(
      dataJson.kirby.output.reprocess[0],
      "cutoff_date",
      dataJson.kirby.output.reprocess[0],
      preArea
    );

    const optionsPropertys = Object.getOwnPropertyNames(dataJson.kirby.output);
    const optionsPropertyExist = optionsPropertys.includes("Options");

    if (optionsPropertyExist) {
      paintValue(
        JSON.stringify(dataJson.kirby.output.options),
        "{}",
        JSON.stringify(dataJson.kirby.output.options),
        preArea
      );
    }

    paintValue(
      dataJson.kirby.output.partition[0],
      dataHtml.fields.partitions_desc,
      '"' + dataJson.kirby.output.partition[0] + '"',
      preArea
    );

    paintValue(
      dataJson.kirby.output.path,
      dataHtml.fields.physical_path_schema,
      dataJson.kirby.output.path,
      preArea
    );

    paintValue(
      dataJson.kirby.output.path,
      dataHtml.fields.physical_object_id,
      dataHtml.fields.physical_object_id,
      preArea
    );

    paintValue(
      dataJson.kirby.output.schema.path,
      dataHtml.fields.tags_desc,
      dataJson.kirby.output.schema.path,
      preArea
    );

    setButtonVerifyActive(false);
  }

  function removeFilterInput() {
    inputUpload.current.value = "";
    inputUploadTwo.current.value = "";

    setDataHtml({});
    setDataJson({});
    setDataHtmlActive(false);
    setDataJsonText("");
    setBtnHtmlActive(true);
    setDataJsonActive(false);
  }

  return (
    <section className="VerifiedIngestas PageView">
      <h1 className="MainContent__title">Validar Ingestas</h1>

      <div className="VerifiedIngesta">
        <div className="VerifiedIngestaEntry">
          <SearchIngesta />
          <div className="VerifiedIngestaEntryUploads VerifiedIngestaEntryDivisor">
            <div className="VerifiedIngestaUploads__colOne">
              <UploadFile
                msgToolTip="Subir archivo HTML"
                onUploadFile={() => {
                  handleUploadFileHtml();
                }}
                inputName="entry"
                labelName="entry"
                isActiveUpload={btnHtmlActive}
                style="UploadFile__btn"
                ref={inputUpload}
                typeFile={".html"}
              />
            </div>
            <div className="VerifiedIngestaUploads__colTwo">
              <UploadFile
                msgToolTip="Subir archivo .CONF"
                onUploadFile={handleUploadFileConf}
                inputName="output"
                labelName="output"
                isActiveUpload={dataJsonActive}
                style={dataJsonActive ? "UploadFile__btn" : "buttonDesactive"}
                ref={inputUploadTwo}
                typeFile={".conf"}
              />
            </div>
          </div>

          <div className="VerifiedIngestaEntryInputs VerifiedIngestaEntryDivisor">
            <InputListValues
              dataValueHtml={dataHtml}
              isHtmlActive={dataHtmlActive}
            />
          </div>

          <ValueTextArea valueTextArea={handleValueTextArea} />

          <div className="VerifiedIngestaEntryButtons VerifiedIngestaEntryDivisor">
            <div className="VerifiedIngestaEntryButton">
              <button
                className={
                  dataJsonActive
                    ? "VerifiedIngestaEntryButton__btnSearch"
                    : "buttonDesactive"
                }
                onClick={buttonVerifyActive ? verificateResults : null}
              >
                Verificar
              </button>
            </div>
            <div className="VerifiedIngestaEntryButton">
              <button
                className="VerifiedIngestaEntryButton__btnClear"
                onClick={removeFilterInput}
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>
        <div className="VerifiedIngestaOutput">
          <pre className="VerifiedIngestaOutput__txtPre" ref={preArea}>
            {dataJsonText}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default VerifiedIngesta;
