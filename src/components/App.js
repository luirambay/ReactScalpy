import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./layout";
import HomePage from "../pages/homePage";
import Home from "../pages/home";
import Project from "../pages/projects";
import Repository from "../pages/repository";
import Graphics from "../pages/graphics";
import GraphicKirby from "../pages/graphic-kirby";
import Ingestas from "../pages/ingestas";
import Iteraciones from "../pages/iteraciones";
import Bui from "../pages/bui";
import SolicitudPr from "../pages/solicitudPr";
import Documents from "../pages/documents";
import VerifiedIngesta from "../pages/verified-ingesta";
import DeudaTecnica from "../pages/deudaTecnica";
import DeudaTecnicaSeguimiento from "../pages/deudaTecnicaSeguimiento";
import Tipologias from "../pages/tipologias";
import PageError from "./pageError";

const App = () => {
  return (
    <BrowserRouter basename="/react-spa-bbva/">
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/repository" component={Repository} />
          <Route exact path="/graphics" component={Graphics} />
          <Route exact path="/graphics/pr" component={GraphicKirby} />
          <Route exact path="/graphics/ingestas" component={Ingestas} />
          <Route exact path="/graphics/deudaTecnica" component={DeudaTecnica} />
          <Route exact path="/graphics/deudaTecnicaSeguimiento" component={DeudaTecnicaSeguimiento} />
          <Route exact path="/graphics/tipologias" component={Tipologias} />
          <Route exact path="/graphics/iteraciones" component={Iteraciones} />
          <Route exact path="/table" component={Bui} />
          <Route exact path="/pr" component={SolicitudPr} />
          <Route exact path="/documents" component={Documents} />
          <Route exact path="/check" component={VerifiedIngesta} />
          <Route component={PageError} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;