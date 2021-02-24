import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./layout";
import HomePage from "../pages/homePage";
import Home from "../pages/home";
import Project from "../pages/projects";
import Boletins from "../pages/boletins";
import Repository from "../pages/repository";
import Graphics from "../pages/graphics";
import GraphicKirby from "../pages/graphic-kirby";
import Ingestas from "../pages/ingestas";
import Bui from "../pages/bui";
import SolicitudPr from "../pages/solicitudPr";
import malla from "../pages/malla";
import Documents from "../pages/documents";
import VerifiedIngesta from "../pages/verified-ingesta";
import PageError from "./pageError";

const App = () => {
  return (
    <BrowserRouter basename="/react-spa-bbva/">
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/boletins" component={Boletins} />
          <Route exact path="/repository" component={Repository} />
          <Route exact path="/graphics" component={Graphics} />
          <Route exact path="/graphics/pr" component={GraphicKirby} />
          <Route exact path="/graphics/ingestas" component={Ingestas} />
          <Route exact path="/table" component={Bui} />
          <Route exact path="/pr" component={SolicitudPr} />
          <Route exact path="/malla" component={malla} />
          <Route exact path="/documents" component={Documents} />
          <Route exact path="/check" component={VerifiedIngesta} />
          <Route component={PageError} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
