import React from "react";

import Document from "../components/document";

const Documents = () => {
  return (
    <section className="Documents PageView">
      <h1 className="MainContent__title">Tableros</h1>
      <div className="Documents">
        <section className="DocumentsList">
          <h2 className="DocumentsList__title">Documentos</h2>
          <div className="DocumentsContain">
            <Document
              title="01 - BUI"
              link="https://docs.google.com/spreadsheets/d/1UNn1b0KZfmZXxFnPkTChv-thwI2mr9AtrtdIuztySAo/edit?ts=5cc87415#gid=834610413"
              fileType="gs"
            />
            <Document
              title="02 - Tablero Seguimiento de Ingestas"
              link="https://docs.google.com/spreadsheets/d/12ywigRiIbAz3e9zxs5ObnbyUELCmfG0qSkx5zRuBFOs/edit?ts=5d324b47#gid=668285374"
              fileType="gs"
            />
            <Document
              title="03 - Tablero Seguimiento de Procesamientos"
              link="https://docs.google.com/spreadsheets/d/1Bl2bh6xlIAc76utfyakNnpO2z6Pb6HQtwIemDifsuJU/edit#gid=100867519"
              fileType="gs"
            />
            <Document
              title="04 - Tablero Seguimiento de Mallas"
              link="https://docs.google.com/spreadsheets/d/1kD6pMW61nvWlCWHeTpWJZYkucvlI5MFSFTa4QzotboM/edit#gid=1051309830"
              fileType="gs"
            />
             <Document
              title="06 - Tablero Seguimiento de Deudas Técnicas"
              link="https://docs.google.com/spreadsheets/d/1vMbVyMPm5ymPgan6FxF03C8H8DgUREKnLNqZVIbQs34/edit#gid=1193157029"
              fileType="gs"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Documents;
