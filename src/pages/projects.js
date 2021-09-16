import React, { useState } from "react";
import useGetApi from "../customHooks/useGetApi";

import PageError from "../components/pageError";
import NotFound from "../components/notFound";
import SearchForm from "../components/searchForm";

import preloader from "../../public/assets/loader.svg";

const Projects = () => {
  const [response, loader, error] = useGetApi({
    spreadsheetId: "1hzl46RsuskuhWIemBdKGmtc_-mzPP9mlh9mT7-hEcZA",
    ranges: ["ProyS Q3.21!E1:J1", "ProyS Q3.21!E2:J22"],
  });
  const [query, setQuery] = useState("");

  function handleQuery(e) {
    setQuery(e.target.value);
    console.log(query);
    console.log(filterTable);
  }

  const filterDataActive = response.dataB.filter((row) => {
    return `${row[0]}`.length > 0 ? row[0] : "";
  });

  const filterTable = filterDataActive.filter((row) => {
    return `${row[0]}`.toLowerCase().includes(query.toLowerCase());
  });

  if (error) {
    return <PageError />;
  }

  return (
    <div className="Projects PageView">
      <h1 className="Projects__title">Proyectos</h1>
      <section className="Table StateTable">
        <div className="TableOptions">
          <SearchForm
            title="Buscar"
            valueQuery={query}
            handleValueSearch={handleQuery}
          />
        </div>

        {loader && <img src={preloader} width="40" />}

        {filterTable.length === 0 ? (
          <NotFound />
        ) : (
          <div className="TableDataWrap">
            <table className="TableData">
              <thead className="TableDataHead">
                {response.dataH.map((el, index) => (
                  <tr className="TableDataHead__row" key={index}>
                    <th className="TableDataHead__col">{el[0]}</th>
                    <th className="TableDataHead__col">{el[2]}</th>
                    <th className="TableDataHead__col">{el[3]}</th>
                    <th className="TableDataHead__col">{el[5]}</th>
                  </tr>
                ))}
              </thead>
              <tbody className="TableDataBody">
                {filterTable.map((el, index) => (
                  <tr className="TableDataBody__row" key={index}>
                    <td className="TableDataBody__col">{el[0]}</td>
                    <td className="TableDataBody__col">{el[2]}</td>
                    <td className="TableDataBody__col">{el[3]}</td>
                    <td className="TableDataBody__col">{el[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
