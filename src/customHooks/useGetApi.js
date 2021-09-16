import { useState, useEffect } from "react";

const CLIENT_ID =
  "";
const API_KEY = "";
const DISCOVERY_DOCS = [
  "https://sheets.googleapis.com/$discovery/rest?version=v4",
];
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

export default function UsetGetApi(parameters) {
  const [response, setResponse] = useState({ dataH: [], dataB: [] });
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isSubscribed = true;

    function handleClientLoad() {
      window.gapi.load("client:auth2", initClient);
    }

    async function initClient() {
      await window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      try {
        await window.gapi.auth2
          .getAuthInstance()
          .isSignedIn.listen(updateSigninStatus);

        if (isSubscribed) {
          updateSigninStatus(
            window.gapi.auth2.getAuthInstance().isSignedIn.get()
          );
        }
      } catch (error) {
        console.log(error, null, 2);
      }
    }

    function updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        if (isSubscribed) {
          listMajors();
        }
      } else {
        setLoader(false);
      }
    }

    async function listMajors() {
      setLoader(true);
      setError(false);
      try {
        const response =
          await window.gapi.client.sheets.spreadsheets.values.batchGet(
            parameters
          );

        const dataH = response.result.valueRanges[0].values;
        const dataB = response.result.valueRanges[1].values;

        if (isSubscribed) {
          setResponse({
            dataH: dataH,
            dataB: dataB,
          });

          setLoader(false);
          setError(false);
        }

        dataB.map((row) => {
          if (row.length < 7) {
            const dif = 6 - row.length;

            for (let i = 0; i < dif; i++) {
              row.push("");
            }
          }
        });
      } catch (response) {
        setError(true);
      }
    }
    if (isSubscribed) {
      handleClientLoad();
    }

    return () => (isSubscribed = false);
  }, []);

  return [response, loader, error];
}
