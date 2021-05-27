import React from "react";

import Document from "../components/document";

const Documents = () => {
  return (
    <section className="Documents PageView">
      <h1 className="MainContent__title">Documentos</h1>
      <div className="Documents">
        <section className="DocumentsList">
          <h2 className="DocumentsList__title">Tableros</h2>
          <div className="DocumentsContain">
            <Document
              title="BUI"
              link="https://docs.google.com/spreadsheets/d/1UNn1b0KZfmZXxFnPkTChv-thwI2mr9AtrtdIuztySAo/edit?ts=5cc87415#gid=834610413"
              fileType="gs"
            />
            <Document
              title="Tablero Seguimiento de Ingestas"
              link="https://docs.google.com/spreadsheets/d/12ywigRiIbAz3e9zxs5ObnbyUELCmfG0qSkx5zRuBFOs/edit?ts=5d324b47#gid=668285374"
              fileType="gs"
            />
            <Document
              title="Tablero Seguimiento de Procesamientos"
              link="https://docs.google.com/spreadsheets/d/1Bl2bh6xlIAc76utfyakNnpO2z6Pb6HQtwIemDifsuJU/edit#gid=100867519"
              fileType="gs"
            />
            <Document
              title="Tablero Seguimiento de Mallas"
              link="https://docs.google.com/spreadsheets/d/1kD6pMW61nvWlCWHeTpWJZYkucvlI5MFSFTa4QzotboM/edit#gid=1051309830"
              fileType="gs"
            />
          </div>
        </section>

        <section className="DocumentsList">
          <h2 className="DocumentsList__title">Revisión de PRS</h2>
          <div className="DocumentsContain">
            <Document
              title="Formato C204 - Kirby"
              link="https://docs.google.com/document/d/12fSl79c2jOrz70ABLEk722iX-q4CvDFt5ILUN4XrQ8g/edit?usp=sharing"
              fileType="gd"
            />
            <Document
              title="Formato C204 - Hammurabi"
              link="https://docs.google.com/document/d/1qjFmXzk4DwfciKt5iU0qIoY76NpwmCH-DIZCp5RLgI0/edit?usp=sharing"
              fileType="gd"
            />
            <Document
              title="Formato C204 - Procesamiento"
              link="https://docs.google.com/document/d/1gZemlySBEwzUtvAMo16hBDb4V4mGuVzxk_QvanwMDvU/edit?usp=sharing"
              fileType="gd"
            />
            <Document
              title="Formato C204 - Notebook"
              link="https://docs.google.com/document/d/1PViWZ29oPPKw-ygrpwWUM3EhdMVCeHna0AUhnAg3T6o/edit?usp=sharing"
              fileType="gd"
            />
            <Document
              title="Documentación - Outstaging Temporales"
              link="https://docs.google.com/spreadsheets/d/1VpstXJDbhWOvMGQwL1tpd4ZLWLRt5IQDWJBYxIU2qNY/edit?usp=sharing"
              fileType="gd"
            />
          </div>
        </section>

        <section className="DocumentsList">
          <h2 className="DocumentsList__title">Hammurabi</h2>
          <div className="DocumentsContain">
            <Document
              title="Reglas de Calidad Kirby"
              link="https://drive.google.com/file/d/1aryZBRHdObaIEiG-pYNIR81QbhwjPyuI/view?usp=sharing"
              fileType="gd"
            />
            <Document
              title="Reglas de Calidad Procesamiento"
              link="https://drive.google.com/file/d/1dXlmX6PnUrH6Mjynox9-zdRAizeYvdbS/view?usp=sharing"
              fileType="gd"
            />
          </div>
        </section>

        <section className="DocumentsList">
          <h2 className="DocumentsList__title">Gestion de Mallas</h2>
          <div className="DocumentsContain">
            <Document
              title="Formato C204 - Mallas"
              link="https://docs.google.com/document/d/1kj-81WAd_kDcAC6iK2HqEIhf4SrrAd3H-W8WthIfx_8/edit?usp=sharing"
              fileType="gd"
            />
          </div>
        </section>

        <section className="DocumentsList">
          <h2 className="DocumentsList__title">Apagado Deuda Técnica</h2>
          <div className="DocumentsContain">
            <Document
              title="Tablero Seguimiento Deudas Técnicas"
              link="https://docs.google.com/spreadsheets/d/1vMbVyMPm5ymPgan6FxF03C8H8DgUREKnLNqZVIbQs34/edit#gid=45860166"
              fileType="gs"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Documents;
