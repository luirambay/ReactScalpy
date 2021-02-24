import React, { useState, useEffect } from "react";
import InputFile from "./input-file";
import propTypes from "prop-types";

import {
  storageType,
  storageZone,
  frecuencyValue,
  dataSourceValue,
} from "../constants/Dictionary";

function InputListValues({ dataValueHtml, isHtmlActive }) {
  const [physicalN, setPhysicalN] = useState("");
  const [dataSource, setDataSource] = useState("");
  const [technicalR, setTechnicalR] = useState("");
  const [storageT, setStorageT] = useState("");
  const [dataPhysicalP, setDataPhysicalP] = useState("");
  const [storageZ, setStorageZ] = useState("");
  const [partitions, setPartitions] = useState("");
  const [tags, setTags] = useState("");
  const [sourceP, setSourceP] = useState("");
  const [frecuency, setFrecuency] = useState("");

  useEffect(() => {
    if (isHtmlActive) {
      setPhysicalN(dataValueHtml.fields.physical_object_id);
      setDataSource(dataValueHtml.fields.data_source_id_fk);

      for (let i in dataSourceValue) {
        if (dataValueHtml.fields.data_source_id_fk.toString() === i) {
          const result = dataSourceValue[i];
          setDataSource(result);
        }
      }

      setTechnicalR(dataValueHtml.fields.technical_responsible_name);
      setStorageT(dataValueHtml.fields.storage_type_id_fk);

      for (let i in storageType) {
        if (dataValueHtml.fields.storage_type_id_fk.toString() === i) {
          const result = storageType[i];
          setStorageT(result);
        }
      }

      setDataPhysicalP(dataValueHtml.fields.physical_path_schema);
      setStorageZ(dataValueHtml.fields.storage_zone_id_fk);

      for (let i in storageZone) {
        if (dataValueHtml.fields.storage_zone_id_fk.toString() === i) {
          const result = storageZone[i];
          setStorageZ(result);
        }
      }

      setPartitions(dataValueHtml.fields.partitions_desc);
      setTags(dataValueHtml.fields.tags_desc);
      setSourceP(dataValueHtml.fields.source_path_name);

      setFrecuency(dataValueHtml.fields.frequency_id_fk);

      for (let i in frecuencyValue) {
        if (dataValueHtml.fields.frequency_id_fk.toString() === i) {
          const result = frecuencyValue[i];
          setFrecuency(result);
        }
      }
    } else {
      setPhysicalN("");
      setDataSource("");
      setTechnicalR("");
      setStorageT("");
      setDataPhysicalP("");
      setStorageZ("");
      setPartitions("");
      setTags("");
      setSourceP("");
      setFrecuency("");
    }
  }, [isHtmlActive]);

  return (
    <>
      <div className="VerifiedIngestaInputs__colOne">
        <InputFile title="Physical Name" valueInput={physicalN} />
        <InputFile title="Data Source" valueInput={dataSource} />
        <InputFile title="Technical Resource" valueInput={technicalR} />
        <InputFile title="Storage Type" valueInput={storageT} />
        <InputFile title="Storage Zones" valueInput={storageZ} />
      </div>
      <div className="VerifiedIngestaInputs__colTwo">
        <InputFile title="Data Physical" valueInput={dataPhysicalP} />
        <InputFile title="Partitions" valueInput={partitions} />
        <InputFile title="Frecuency" valueInput={frecuency} />
        <InputFile title="Tags" valueInput={tags} />
        <InputFile title="Source" valueInput={sourceP} />
      </div>
    </>
  );
}

InputListValues.propTypes = {
  dataValueHtml: propTypes.object,
  isHtmlActive: propTypes.bool,
};

export default InputListValues;
