import React, { useState } from "react";
import useGetApi from "../customHooks/useGetApi";
import PageError from "../components/pageError";
import NotFound from "../components/notFound";
import SearchForm from "../components/searchForm";

import preloader from "../../public/assets/loader.svg";

const Speech = () => {
  const [response, loader, error] = useGetApi({
    // spreadsheetId: "1UQxGNPDoUC6frmgqib3pqaZaCPaj4wRXirz6jANvnW8",
    spreadsheetId: "1GriODdvxdaGI_Ujb40E_7gvSL8PqFsQooOl1h7jxUkg",
    ranges: ["Speech!B2:G2", "Speech!B3:G50"],
  });

  const [query, setQuery] = useState("");

  function handleQuery(e) {
    setQuery(e.target.value);
  }

  const filterByX = response.dataB.filter((row) => {
    return `${row[4]}`.toLowerCase().includes("x");
  });

  const filterByQuery = filterByX.filter((row) => {
    return `${row[0]}`.toLowerCase().includes(query.toLowerCase()) || 
    `${row[1]}`.toLowerCase().includes(query.toLowerCase()) ||
    `${row[2]}`.toLowerCase().includes(query.toLowerCase()) ||
    `${row[3]}`.toLowerCase().includes(query.toLowerCase()) ||
    `${row[4]}`.toLowerCase().includes(query.toLowerCase())
  });

  if (error) {
    return <PageError />;
  }

  return (
    <div className="Projects PageView">
      <h1 className="Projects__title">Speech</h1>
      <section className="Table StateTable">
        <div className="TableOptions">
          <SearchForm
            title="Buscar"
            valueQuery={query}
            handleValueSearch={handleQuery}
          />
        </div>

        {loader && <img className="preloaderIcon" src={preloader} width="40" />}

        {filterByQuery.length === 0 ? (
          <NotFound />
        ) : (
          <div className="TableDataWrap">
            <table className="TableData">
              <thead className="TableDataHead">
                {response.dataH.map((el, index) => (
                  <tr className="TableDataHead__row" key={index}>
                    <th className="TableDataHead__col">{el[0]}</th>
                    <th className="TableDataHead__col">{el[1]}</th>
                    <th className="TableDataHead__col">{el[2]}</th>
                    <th className="TableDataHead__col">{el[3]}</th>
                    <th className="TableDataHead__col">{el[4]}</th>
                  </tr>
                ))}
              </thead>
              <tbody className="TableDataBody">
                {filterByQuery.map((el, index) => (
                  <tr className="TableDataBody__row" key={index}>
                    <td className="TableDataBody__col">{el[0]}</td>
                    <td className="TableDataBody__col">{el[1]}</td>
                    <td className="TableDataBody__col">{el[2]}</td>
                    <td className="TableDataBody__col">{el[3]}</td>
                    <td
                      style={{ textAlign: "center" }}
                      className="TableDataBody__col"
                    >
                      {el[4]}
                    </td>
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

export default Speech;
