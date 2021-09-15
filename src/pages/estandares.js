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
            <Document
              title="Estándares de Desarrollo en Datio"
              link="https://docs.google.com/document/d/1s0DUe1EFYQQUzjvdbjHIKYJZSusl1VKpTFJHHPYmbvs/edit"
              fileType="gd"
            />
            <Document
              title="Manual de Mallas"
              link="https://docs.google.com/document/d/1f_F7jxgFAgc-avgqS9FoLeEbdtJ1VO6YI8TzYQihV-c/edit"
              fileType="gd"
            />
            <Document
              title="Manual de Creación HU + Ticket de Pase"
              link="https://docs.google.com/document/d/15I6TbGM9CAjCYq6awTlrJUrF_2iK54XXn_JuzFucCfw/edit"
              fileType="gd"
            />
            <Document
              title="Lineamientos Notebook Python"
              link="https://docs.google.com/document/d/1IIWdzisnEXj4GKo0kMxRGtwdpIKOVKFaaoZP4lJxUwQ/edit"
              fileType="gd"
            />
            <Document
              title="Lineamientos Transmisión Host"
              link="https://docs.google.com/document/d/1CoVRCGo_W5ZvEDFtQ6AaVVifKDHTxpqvxpDmCTeLaEc/edit"
              fileType="gd"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Documents;
