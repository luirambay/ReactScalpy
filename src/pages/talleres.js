import React from "react";

import Document from "../components/document";

const Documents = () => {
  return (
    <section className="Documents PageView">
      <h1 className="MainContent__title">Talleres DQA</h1>
      <div className="Documents">
        <section className="DocumentsList">
          <h2 className="DocumentsList__title">Presentación</h2>
          <div className="DocumentsContain">
            <Document
              title="Taller DQA - Q3 2021"
              link="https://docs.google.com/presentation/d/1yr2N1AVIiEbA1fr8-aZxhHIsVF7MnT_5bbfhXj4dSRo"
              fileType="gp"
            />
          </div>
        </section>

        <section className="DocumentsList">
          <h2 className="DocumentsList__title">Videos</h2>
          <div className="DocumentsContain">
            <Document
              title="Taller DQA - Q3 2021 - 1ra sesión"
              link="https://drive.google.com/file/d/1gsyC7EblWoVhqxwBnAx4exyHSaGqnn-E/view"
              fileType="gm"
            />
            <Document
              title="Taller DQA - Q3 2021 - 2da sesión"
              link="https://drive.google.com/file/d/15H-vJHj7LRZDN2-jFj-ZjPDdunmZAoB5/view"
              fileType="gm"
            />
            <Document
              title="Pildora Ingesta"
              link="https://drive.google.com/file/d/1ty2idZgiQSueWhGJ9sPTneyNLSHe4Aqa/view?usp=sharing"
              fileType="gm"
            />
            <Document
              title="Pildora Hammurabi"
              link="https://drive.google.com/file/d/1wzI61FG5cpYjkOTMcjJyrLn2wkCFmHb8/view?usp=sharing"
              fileType="gm"
            />
            <Document
              title="Pildora Scala"
              link="https://drive.google.com/file/d/1JXnvJlFaD7zUrc3im4ipENcKeyQ1tIS9/view?usp=sharing"
              fileType="gm"
            />
            <Document
              title="Pildora Scaffolder"
              link="https://drive.google.com/file/d/1AxQoYcPbdty28kBqlnLDMjZ9ssWtiK9k/view?usp=sharing"
              fileType="gm"
            />
            <Document
              title="Pildora Mallas"
              link="https://drive.google.com/file/d/1QshNOqmEzYMgsEx5MEqsTp2jYqGjnqxG/view?usp=sharing"
              fileType="gm"
            />
            <Document
              title="Pildora Host"
              link="https://drive.google.com/file/d/1gYWzCPElU-Q_43iSWiC_ylfyXi1iCfTq/view?usp=sharing"
              fileType="gm"
            />
            <Document
              title="Pildora Acceso a Repositorios"
              link="https://drive.google.com/file/d/1pK3qnwYa_7b8ZdQAGp3RG69U6twQRyiC/view?usp=sharing"
              fileType="gm"
            />
            <Document
              title="Pildora Creación de Repositorios"
              link="https://drive.google.com/file/d/12G_Efb393Mgsqsdo4lHFdTeyLPynaulh/view?usp=sharing"
              fileType="gm"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Documents;
