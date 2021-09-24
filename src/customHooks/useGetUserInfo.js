import { useState, useEffect } from "react";

const CLIENT_ID = "";
const API_KEY = "";

const DISCOVERY_DOCS = [
  "https://sheets.googleapis.com/$discovery/rest?version=v4",
];
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

export default function UsetGetApi() {
  const [btnActive, setBtnActive] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userPhoto, setUserPhoto] = useState(
    "https://image.freepik.com/vector-gratis/avatar-cara-monstruo-dibujos-animados-monstruo-halloween_6996-1164.jpg"
  );

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
        console.log(error);
      }
    }

    function updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        setBtnActive(false);

        const googleUser = window.gapi.auth2
          .getAuthInstance()
          .currentUser.get();

        const profile = googleUser.getBasicProfile();

        const userName = profile.getName();
        const email = profile.getEmail();
        const userPhoto = profile.getImageUrl();

        setUserName(userName);
        setEmail(email);
        setUserPhoto(userPhoto);
      } else {
        setBtnActive(true);
      }
    }

    if (isSubscribed) {
      handleClientLoad();
    }

    return () => (isSubscribed = false);
  }, []);

  function handleAuthClick() {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  function handleSignoutClick() {
    window.gapi.auth2.getAuthInstance().signOut();
    window.location.reload(true);
  }

  return [
    btnActive,
    email,
    userName,
    userPhoto,
    handleAuthClick,
    handleSignoutClick,
  ];
}
