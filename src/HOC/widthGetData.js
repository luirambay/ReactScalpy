import React, { Component } from "react";
const gapi = window.gapi;

const CLIENT_ID =
  "";
const API_KEY = "";
var DISCOVERY_DOCS = [
  "https://sheets.googleapis.com/$discovery/rest?version=v4",
];
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

function widthGetData(WrappedComponent, sheetParameters) {
  return class widthGetDataStore extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sesionActive: false,
        loading: false,
        error: null,
        dataStore: {
          dataHead: [],
          dataBody: [],
        },
        btnActive: true,
      };
      this.mounted = true;
      this.initialize = true;
      this.chargeData = true;
    }

    componentDidMount() {
      this.mounted = true;
      if (this.initialize) {
        this.handleClientLoad();
      }
    }

    sheetActive = () => {
      const sheetActivo = sheetParameters;
      return sheetActivo;
    };

    handleClientLoad = () => {
      gapi.load("client:auth2", this.initClient);
    };

    initClient = async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      try {
        await gapi.auth2
          .getAuthInstance()
          .isSignedIn.listen(this.updateSigninStatus);

        if (this.mounted) {
          this.updateSigninStatus(
            gapi.auth2.getAuthInstance().isSignedIn.get()
          );
        }
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
    };

    updateSigninStatus = (isSignedIn) => {
      this.setState({ sesionActive: isSignedIn });
      if (isSignedIn) {
        this.setState({ btnActive: false });
        if (this.chargeData) {
          this.listMajors();
        }
      } else {
        this.setState({ btnActive: true, loading: false });
      }
    };

    handleAuthClick = () => {
      gapi.auth2.getAuthInstance().signIn();
    };

    handleSignoutClick = () => {
      gapi.auth2.getAuthInstance().signOut();

      this.setState({
        sesionActive: false,
      });
      window.location.reload(true);
    };

    componentWillUnmount() {
      this.initialize = false;
      this.chargeData = false;
      this.mounted = false;
    }

    listMajors = async () => {
      this.setState({ loading: true, error: false, dataActive: false });

      try {
        const response = await gapi.client.sheets.spreadsheets.values.batchGet(
          this.sheetActive()
        );

        const dataH = response.result.valueRanges[0].values;
        const dataB = response.result.valueRanges[1].values;

        if (this.mounted) {
          this.setState({
            loading: false,
            dataStore: {
              dataHead: dataH,
              dataBody: dataB,
            },
          });
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
        this.setState({
          loading: false,
          error: true,
        });
        console.log(response.result.error.message);
      }
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          dataStore={this.state.dataStore}
          autorizar={this.state.btnActive}
          error={this.state.error}
          loader={this.state.loading}
          handleSignIn={this.handleAuthClick}
          handleSignOut={this.handleSignoutClick}
          dataActive={this.state.sesionActive}
        />
      );
    }
  };
}

export default widthGetData;
