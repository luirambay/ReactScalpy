import React from "react";

import Document from "../components/document";

const Documents = () => {
  return (
    <section className="Documents PageView">
      <h1 className="MainContent__title">Formatos</h1>
      <div className="Documents">
        <section className="DocumentsList">
          <h2 className="DocumentsList__title">C204 - Ingestas</h2>
          <div className="DocumentsContain">
            <Document
              title="Con Kirby"
              link="https://docs.google.com/document/d/1mu3U0AWRp37raGnRhzk4h4CMLA7xH2GEIVQNB-4kmto/edit"
              fileType="gd"
            />
            <Document
              title="Con Arquetipo Scala"
              link="https://docs.google.com/document/d/1vT5wRIDallt9JEI7eEEH8vEIHwMXbHgyCHE_RrUrI2g/edit"
              fileType="gd"
            />
            <Document
              title="Con Kirby - MSPD"
              link="https://docs.google.com/document/d/1AI0l4rsApumrdGR3gGXQdFmNm5WwYr_y_Cqy-IDFmYc/edit"
              fileType="gd"
            />
            <Document
              title="Hammurabi"
              link="https://docs.google.com/document/d/1KTaHxr3yTpiBXnnOb3oba8a5rrihz4XO57B-i1LEK6c/edit"
              fileType="gd"
            />
          </div>
        </section>

        <section className="DocumentsList">
          <h2 className="DocumentsList__title">C204 - Procesamiento</h2>
          <div className="DocumentsContain">
            <Document
              title="Con Arquetipo Scala"
              link="https://docs.google.com/document/d/1vT5wRIDallt9JEI7eEEH8vEIHwMXbHgyCHE_RrUrI2g/edit"
              fileType="gd"
            />
            <Document
              title="Con Process Manager"
              link="https://docs.google.com/document/d/1cKc6FRVbQsk2E-RtO3YBSQ-RdZDMOa48a-VovBaelLA/edit"
              fileType="gd"
            />
            <Document
              title="Con Kirby"
              link="https://docs.google.com/document/d/1mu3U0AWRp37raGnRhzk4h4CMLA7xH2GEIVQNB-4kmto/edit"
              fileType="gd"
            />
            <Document
              title="Con Scaffolder"
              link="https://docs.google.com/document/d/18ENQMEV9JK7lrhMQOs8czimFWDqCsyfeE80GxJLyfEA/edit"
              fileType="gd"
            />
          </div>
        </section>

        <section className="DocumentsList">
          <h2 className="DocumentsList__title">C204 - Otros casos</h2>
          <div className="DocumentsContain">
            <Document
              title="Operativización con Kirby"
              link="https://docs.google.com/document/d/1mu3U0AWRp37raGnRhzk4h4CMLA7xH2GEIVQNB-4kmto/edit"
              fileType="gd"
            />
            <Document
              title="Mallas"
              link="https://docs.google.com/document/d/1j9P3Vl3Su3P193iHnjbmZ1tbjliLLQQSRzxlRnIWPrk/edit"
              fileType="gd"
            />
            <Document
              title="Host"
              link="https://docs.google.com/document/d/1-lgqMYMIAuKlPKPzpFawU3F7Tah8uLYZ5b1n5hVZToo/edit"
              fileType="gd"
            />
            <Document
              title="CTL - Data X"
              link="https://docs.google.com/document/d/1PW8yYUJRFwDM0bmy4CdDmTiTNtI8ZlayvahxcGQCj7Y/edit"
              fileType="gd"
            />
            <Document
              title="Migration Tool"
              link="https://docs.google.com/document/d/101v50cIFimruciEttx4xYMmE8GUhTJmdZh62b5oNcic/edit"
              fileType="gd"
            />
            <Document
              title="Spark Compactor"
              link="https://docs.google.com/document/d/1C3hHmYz0sHcujjuRNNOjwrqf_kKMyC6a6J5fdP8LIoc/edit"
              fileType="gd"
            />
          </div>
        </section>

        <section className="DocumentsList">
          <h2 className="DocumentsList__title">Reglas de calidad</h2>
          <div className="DocumentsContain">
            <Document
              title="Ingesta"
              link="https://drive.google.com/file/d/1Jtf_JKk4lANenQkklOHlnGen0WkmKGw5/view?usp=sharing"
              fileType="gs"
            />
            <Document
              title="Procesamiento"
              link="https://drive.google.com/file/d/1TdvEsOWF5ThrGwgFLl7-XqxbhExYmfmV/view?usp=sharing"
              fileType="gs"
            />
          </div>
        </section>

        <section className="DocumentsList">
          <h2 className="DocumentsList__title">Salidas No Persistentes</h2>
          <div className="DocumentsContain">
            <Document
              title="Outstaging / Temporales"
              link="https://docs.google.com/spreadsheets/d/1VpstXJDbhWOvMGQwL1tpd4ZLWLRt5IQDWJBYxIU2qNY/edit"
              fileType="gd"
            />
          </div>
        </section>

        <section className="DocumentsList">
          <h2 className="DocumentsList__title">P110</h2>
          <div className="DocumentsContain">
            <Document
              title="Host"
              link="https://docs.google.com/spreadsheets/d/1Tvh5RPt4fZyPBY49QT11x2erkgARWvoJE7vomnsnH1c/edit"
              fileType="gd"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Documents;
