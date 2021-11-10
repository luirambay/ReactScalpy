import React from "react";

import Document from "../components/document";

const Documents = () => {
  return (
    <section className="Documents PageView">
      <h1 className="MainContent__title">Estandares</h1>
      <div className="Documents">
        <section className="DocumentsList">
          <h2 className="DocumentsList__title">Documentos</h2>
          <div className="DocumentsContain">
            <Document
              title="Estándares de Desarrollo en Datio - Versión Web"
              link="https://sites.google.com/bbva.com/dqaperu/inicio"
              fileType="pw"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Documents;
