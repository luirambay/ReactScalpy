import React, { useState } from "react";
import useGetApi from "../customHooks/useGetApi";

import PageError from "../components/pageError";
import NotFound from '../components/notFound';
import SearchForm from "../components/searchForm";

import preloader from "../../public/assets/loader.svg";

const Repository = () => {
  const [
    response,
    btnActive,
    loader,
    error,
    handleAuthClick,
    handleSignoutClick,
  ] = useGetApi({
    spreadsheetId: "1eS94lxFcp5u51Fz9lR1qUBdCKXw34FqnxqVfD42y4IA",
    ranges: ["REPOSITORIOS!A1:Q1", "REPOSITORIOS!A2:Q78"],
  });
  const [query, setQuery] = useState("");

  function handleQuery(e) {
    setQuery(e.target.value);
  }

  const filterTable = response.dataB.filter((row) => {
    return `${row[0]} ${row[1]} ${row[2]} ${row[3]} ${row[4]} ${row[5]} ${row[7]} ${row[9]}`
      .toLowerCase()
      .includes(query.toLowerCase());
  });

  if (error) {
    return <PageError />;
  }

  return (
    <div className="Repository PageView">
      <h1 className="MainContent__title">Repositorio</h1>
      <section className="Table Repository">
        <div className="TableOptions">
          <SearchForm
            title="Buscar"
            valueQuery={query}
            handleValueSearch={handleQuery}
          />
          {btnActive ? (
            <button className="btn-signIn" onClick={handleAuthClick}>
              Acceder para obtener datos
            </button>
          ) : (
            <button className="btn-signOut" onClick={handleSignoutClick}>
              Desconectarse
            </button>
          )}
        </div>

        {loader && <img src={preloader} width="40" />}

        {
          filterTable.length === 0 ? <NotFound /> :
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
                  <th className="TableDataHead__col">{el[5]}</th>
                  <th className="TableDataHead__col">{el[7]}</th>
                  <th className="TableDataHead__col">{el[9]}</th>
                </tr>
              ))}
            </thead>
            <tbody className="TableDataBody">
              {filterTable.map((el, index) => (
                <tr className="TableDataBody__row" key={index}>
                  <td className="TableDataBody__col">{el[0]}</td>
                  <td className="TableDataBody__col">{el[1]}</td>
                  <td className="TableDataBody__col">{el[2]}</td>
                  <td className="TableDataBody__col">{el[3]}</td>
                  <td className="TableDataBody__col">{el[4]}</td>
                  <td className="TableDataBody__col">{el[5]}</td>
                  <td className="TableDataBody__col">{el[7]}</td>
                  <td className="TableDataBody__col">{el[9]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        }
      </section>
    </div>
  );
};

export default Repository;
