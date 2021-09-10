import React, { useState } from "react";
import useGetApi from "../customHooks/useGetApi";
import PageError from "../components/pageError";
import NotFound from "../components/notFound";
import SearchForm from "../components/searchForm";

import preloader from "../../public/assets/loader.svg";

const Boletins = () => {
  const [response, loader, error] = useGetApi({
    // spreadsheetId: "1UQxGNPDoUC6frmgqib3pqaZaCPaj4wRXirz6jANvnW8",
    spreadsheetId: "1GriODdvxdaGI_Ujb40E_7gvSL8PqFsQooOl1h7jxUkg",
    ranges: ["Boletines DQA!A1:E1", "Boletines DQA!A2:E100"],
  });
  // const [arrayRow, setArrayRow] = useState([]);

  const [query, setQuery] = useState("");

  function handleQuery(e) {
    setQuery(e.target.value);
  }
  // function handleValues(ev) {
  //   const elements = document.querySelectorAll(".TableDataBody__row");
  //   var btnsArr = Array.from(elements);
  //   let rowArray = [];
  //   btnsArr.forEach((el) => {
  //     if (el.childNodes[0].innerHTML == ev.target.id) {
  //       const arrayNew = Array.from(el.childNodes);
  //       return rowArray.push(arrayNew);
  //     }
  //   });
  //   setArrayRow(rowArray);
  // }

  // const filterDataActive = response.dataB.filter((row) => {
  //   return `${row[2]}`.includes("Si") ? row[3] : "";
  // });

  const filterTable = response.dataB.filter((row) => {
    return `${row[2]}`.toLowerCase().includes(query.toLowerCase());
  });

  if (error) {
    return <PageError />;
  }

  return (
    <div className="Projects PageView">
      <h1 className="Projects__title">Boletines</h1>
      <section className="Table StateTable">
        <div className="TableOptions">
          <SearchForm
            title="Buscar"
            valueQuery={query}
            handleValueSearch={handleQuery}
          />
        </div>

        {loader && <img className="preloaderIcon" src={preloader} width="40" />}

        {filterTable.length === 0 ? (
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
                    <th className="TableDataHead__col">{el[4]}</th>
                  </tr>
                ))}
              </thead>
              <tbody className="TableDataBody">
                {filterTable.reverse().map((el, index) => (
                  <tr className="TableDataBody__row" key={index}>
                    {/* <td className="TableDataBody__col">{index}</td> */}
                    <td className="TableDataBody__col">{el[0]}</td>
                    <td className="TableDataBody__col">{el[1]}</td>
                    <td className="TableDataBody__col">{el[2]}</td>
                    <td className="TableDataBody__col">
                      <a rel="noopener noreferrer" target="_blank" href={el[4]}>
                        <i className="fas fa-file"></i>
                      </a>
                    </td>
                    {/* <td>
                      <button id={index} onClick={handleValues}>
                        asignar
                      </button>
                    </td> */}
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

export default Boletins;
