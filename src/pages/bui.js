import React, { useState } from "react";
import useGetApi from "../customHooks/useGetApi";

import PageError from "../components/pageError";
import SearchForm from "../components/searchForm";

import preloader from "../../public/assets/loader.svg";

const Bui = () => {
  const [search, setSearch] = useState("");

  const [
    responseBaseUnicaIngestas,
    btnActive,
    loader,
    error,
    handleAuthClick,
    handleSignoutClick
  ] = useGetApi({
    spreadsheetId: "1UNn1b0KZfmZXxFnPkTChv-thwI2mr9AtrtdIuztySAo",
    ranges: ["Base Única de Ingesta!A3:AM3", "Base Única de Ingesta!A4:AM2310"],
  });

  const [
    responseSeguimientoIngestas
  ] = useGetApi({
    spreadsheetId: "12ywigRiIbAz3e9zxs5ObnbyUELCmfG0qSkx5zRuBFOs",
    ranges: ["Concentradora Estatus!B2:AD2", "Concentradora Estatus!B3:AD800"],
  });

  const [
    responseSeguimientoProcesos
  ] = useGetApi({
    spreadsheetId: "1Bl2bh6xlIAc76utfyakNnpO2z6Pb6HQtwIemDifsuJU",
    ranges: ["Salidas Persistentes!B3:AE3", "Salidas Persistentes!B4:AE100"],
  });


  const filterTableBaseUnicaIngestas = responseBaseUnicaIngestas.dataB.filter((row) => {
    return `${row[20]}`.toLowerCase().includes(search.toLowerCase());
  });

  const filterTableSeguimientoIngestas = responseSeguimientoIngestas.dataB.filter((row) => {
    return `${row[0]}`.toLowerCase().includes(search.toLowerCase());
  });

  const filterTableSeguimientoProcesos = responseSeguimientoProcesos.dataB.filter((row) => {
    return `${row[0]}`.toLowerCase().includes(search.toLowerCase());
  });

  function handleQuery(ev) {
    setSearch(ev.target.value)
  }

  const shortDataBaseUnicaIngestas = filterTableBaseUnicaIngestas.slice(0, 5);
  const shortDataSeguimientoIngestas = filterTableSeguimientoIngestas.slice(0, 5);
  const shortDataSeguimientoProcesos = filterTableSeguimientoProcesos.slice(0, 5);

  if (error) {
    return <PageError />;
  }

  return (
    <div className="Bui PageView">
      <h1 className="MainContent__title">Tableros</h1>
      <div className="Table Bui">
        <div className="TableOptions">
          <SearchForm
            title="Buscar"
            valueQuery={search}
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

        {loader ? <img src={preloader} width="40" /> : null}

          <div className="containerTablesData">
            <div className="TableDataWrap">

            {
              filterTableBaseUnicaIngestas.length === 0 ? null :
              <div className="TableDataWrap">
                <h2 className="titleTableData">Base Única de Ingesta</h2>
                <table className="TableData">
                  <thead className="TableDataHead">
                    {responseBaseUnicaIngestas.dataH.map((el, index) => (
                      <tr className="TableDataHead__row" key={index}>
                        <th className="TableDataHead__col">{el[0]}</th>
                        <th className="TableDataHead__col">{el[1]}</th>
                        <th className="TableDataHead__col">{el[9]}</th>
                        <th className="TableDataHead__col">{el[11]}</th>
                        <th className="TableDataHead__col">{el[12]}</th>
                        <th className="TableDataHead__col">{el[18]}</th>
                        <th className="TableDataHead__col">{el[20]}</th>
                        <th className="TableDataHead__col">{el[25]}</th>
                        <th className="TableDataHead__col">{el[32]}</th>
                        <th className="TableDataHead__col">URL Documentación</th>
                        <th className="TableDataHead__col">{el[36]}</th>
                        <th className="TableDataHead__col">{el[37]}</th>
                        <th className="TableDataHead__col">{el[38]}</th>
                      </tr>
                    ))}
                  </thead>
                  <tbody className="TableDataBody">
                    {shortDataBaseUnicaIngestas.map((el, index) => (
                      <tr className="TableDataBody__row" key={index}>
                        <td className="TableDataBody__col">{el[0]}</td>
                        <td className="TableDataBody__col">{el[1]}</td>
                        <td className="TableDataBody__col">{el[9]}</td>
                        <td className="TableDataBody__col">{el[11]}</td>
                        <td className="TableDataBody__col">{el[12]}</td>
                        <td className="TableDataBody__col">{el[18]}</td>
                        <td className="TableDataBody__col">{el[20]}</td>
                        <td className="TableDataBody__col">{el[25]}</td>
                        <td className="TableDataBody__col">{el[32]}</td>
                        <td className="TableDataBody__col">
                          <a href={el[34]} rel="noopener noreferrer" target="_blank">
                            Link
                          </a>
                        </td>
                        <td className="TableDataBody__col">{el[36]}</td>
                        <td className="TableDataBody__col">{el[37]}</td>
                        <td className="TableDataBody__col">{el[38]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }

            {
              filterTableSeguimientoIngestas.length === 0 ? null :
              <div className="TableDataWrap">
                <h2 className="titleTableData">Tablero Seguimiento de Ingestas</h2>
                <table className="TableData">
                  <thead className="TableDataHead">
                    {responseSeguimientoIngestas.dataH.map((el, index) => (
                      <tr className="TableDataHead__row" key={index}>
                        <th className="TableDataHead__col">{el[0]}</th>
                        <th className="TableDataHead__col">{el[11]}</th>
                        <th className="TableDataHead__col">{el[12]}</th>
                        <th className="TableDataHead__col">{el[13]}</th>
                        <th className="TableDataHead__col">{el[14]}</th>
                        <th className="TableDataHead__col">{el[15]}</th>
                        <th className="TableDataHead__col">{el[16]}</th>
                        <th className="TableDataHead__col">{el[17]}</th>
                        <th className="TableDataHead__col">{el[27]}</th>
                        <th className="TableDataHead__col">{el[28]}</th>
                      </tr>
                    ))}
                  </thead>
                  <tbody className="TableDataBody">
                    {shortDataSeguimientoIngestas.map((el, index) => (
                      <tr className="TableDataBody__row" key={index}>
                        <td className="TableDataBody__col">{el[0]}</td>
                        <td className="TableDataBody__col">{el[11]}</td>
                        <td className="TableDataBody__col">{el[12]}</td>
                        <td className="TableDataBody__col">{el[13]}</td>
                        <td className="TableDataBody__col">{el[14]}</td>
                        <td className="TableDataBody__col">{el[15]}</td>
                        <td className="TableDataBody__col">{el[16]}</td>
                        <td className="TableDataBody__col">{el[17]}</td>
                        <td className="TableDataBody__col">{el[27]}</td>
                        <td className="TableDataBody__col">{el[28]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }

            {
              filterTableSeguimientoProcesos.length === 0 ? null :
              <div className="TableDataWrap">
                <h2 className="titleTableData">Tablero de Seguimiento de Procesamientos</h2>
                <table className="TableData">
                  <thead className="TableDataHead">
                    {responseSeguimientoProcesos.dataH.map((el, index) => (
                      <tr className="TableDataHead__row" key={index}>
                        <th className="TableDataHead__col">{el[0]}</th>
                        <th className="TableDataHead__col">{el[7]}</th>
                        <th className="TableDataHead__col">{el[8]}</th>
                        <th className="TableDataHead__col">{el[9]}</th>
                        <th className="TableDataHead__col">{el[10]}</th>
                        <th className="TableDataHead__col">{el[11]}</th>
                        <th className="TableDataHead__col">{el[12]}</th>
                        <th className="TableDataHead__col">{el[13]}</th>
                        <th className="TableDataHead__col">{el[14]}</th>
                        <th className="TableDataHead__col">{el[15]}</th>
                        <th className="TableDataHead__col">{el[16]}</th>
                        <th className="TableDataHead__col">{el[17]}</th>
                        <th className="TableDataHead__col">{el[18]}</th>
                        <th className="TableDataHead__col">{el[19]}</th>
                        <th className="TableDataHead__col">{el[20]}</th>
                        <th className="TableDataHead__col">{el[21]}</th>
                        <th className="TableDataHead__col">{el[22]}</th>
                        <th className="TableDataHead__col">{el[23]}</th>
                        <th className="TableDataHead__col">{el[24]}</th>
                        <th className="TableDataHead__col">{el[25]}</th>
                        <th className="TableDataHead__col">{el[26]}</th>
                        <th className="TableDataHead__col">{el[27]}</th>
                        <th className="TableDataHead__col">Tipo de Fichero</th>
                      </tr>
                    ))}
                  </thead>
                  <tbody className="TableDataBody">
                    {shortDataSeguimientoProcesos.map((el, index) => (
                      <tr className="TableDataBody__row" key={index}>
                        <td className="TableDataBody__col">{el[0]}</td>
                        <td className="TableDataBody__col">{el[7]}</td>
                        <td className="TableDataBody__col">{el[8]}</td>
                        <td className="TableDataBody__col">{el[9]}</td>
                        <td className="TableDataBody__col">{el[10]}</td>
                        <td className="TableDataBody__col">{el[11]}</td>
                        <td className="TableDataBody__col">{el[12]}</td>
                        <td className="TableDataBody__col">{el[13]}</td>
                        <td className="TableDataBody__col">{el[14]}</td>
                        <td className="TableDataBody__col">{el[15]}</td>
                        <td className="TableDataBody__col">{el[16]}</td>
                        <td className="TableDataBody__col">{el[17]}</td>
                        <td className="TableDataBody__col">{el[18]}</td>
                        <td className="TableDataBody__col">{el[19]}</td>
                        <td className="TableDataBody__col">{el[20]}</td>
                        <td className="TableDataBody__col">{el[21]}</td>
                        <td className="TableDataBody__col">{el[22]}</td>
                        <td className="TableDataBody__col">{el[23]}</td>
                        <td className="TableDataBody__col">{el[24]}</td>
                        <td className="TableDataBody__col">{el[25]}</td>
                        <td className="TableDataBody__col">{el[26]}</td>
                        <td className="TableDataBody__col">{el[27]}</td>
                        <td className="TableDataBody__col">{el[28]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Bui;
