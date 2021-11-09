import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./layout";
import HomePage from "../pages/homePage";
import SolicitudPr from "../pages/solicitudPr";
import Malla from "../pages/malla";
import Home from "../pages/home";
import Boletins from "../pages/boletins";
import Speech from "../pages/speech";
import Label from "../pages/label";
import Project from "../pages/projects";
import Repository from "../pages/repository";
import Graphics from "../pages/graphics";
import GraphicsDQA from "../pages/graphicsDQA";
import GraphicKirby from "../pages/graphic-kirby";
import Ingestas from "../pages/ingestas";
import Iteraciones from "../pages/iteraciones";
import Bui from "../pages/bui";
import DeudaTecnica from "../pages/deudaTecnica";
import DeudaTecnicaSeguimiento from "../pages/deudaTecnicaSeguimiento";
import Tipologias from "../pages/tipologias";
import Documents from "../pages/documents";
import Estandares from "../pages/estandares";
import Talleres from "../pages/talleres";
import Tableros from "../pages/tableros";
import VerifiedIngesta from "../pages/validator";
import VerifiedJIRA from "../pages/jira";
import SeguimientoDQA from "../pages/seguimientoDQA";
import TableroHammurabi from "../pages/tableroHammurabi";
import TableroMallas from "../pages/tableroMallas";
// import GeneratorC204 from "../pages/generator";
import RulesCSV from "../pages/rules";
import PageError from "./pageError";
import ReactGA from "react-ga";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-VEXLP8X7CB");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <BrowserRouter basename="/react-spa-bbva/">
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pr" component={SolicitudPr} />
          <Route exact path="/malla" component={Malla} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/boletins" component={Boletins} />
          <Route exact path="/speech" component={Speech} />
          <Route exact path="/label" component={Label} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/repository" component={Repository} />
          <Route exact path="/graphics" component={Graphics} />
          <Route exact path="/graphicsdqa" component={GraphicsDQA} />
          <Route exact path="/graphics/pr" component={GraphicKirby} />
          <Route exact path="/graphics/ingestas" component={Ingestas} />
          <Route exact path="/graphics/deudaTecnica" component={DeudaTecnica} />
          <Route
            exact
            path="/graphicsdqa/seguimientoDQA"
            component={SeguimientoDQA}
          />
          <Route
            exact
            path="/graphics/deudaTecnicaSeguimiento"
            component={DeudaTecnicaSeguimiento}
          />
          <Route
            exact
            path="/graphicsdqa/tableroHammurabi"
            component={TableroHammurabi}
          />
          <Route
            exact
            path="/graphicsdqa/tableroMallas"
            component={TableroMallas}
          />
          <Route exact path="/graphics/tipologias" component={Tipologias} />
          <Route exact path="/graphics/iteraciones" component={Iteraciones} />
          <Route exact path="/table" component={Bui} />
          <Route exact path="/documents" component={Documents} />
          <Route exact path="/estandares" component={Estandares} />
          <Route exact path="/talleres" component={Talleres} />
          <Route exact path="/tableros" component={Tableros} />
          <Route exact path="/validator" component={VerifiedIngesta} />
          <Route exact path="/jira" component={VerifiedJIRA} />
          {/* <Route exact path="/generator" component={GeneratorC204} /> */}
          <Route exact path="/rules" component={RulesCSV} />
          <Route component={PageError} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
