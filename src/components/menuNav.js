import React from "react";
import useGetUserInfo from "../customHooks/useGetUserInfo";

import { NavLink } from "react-router-dom";

const MenuNav = () => {
  const [, email] = useGetUserInfo();

  const correosPermitidos = [
    "alexandra.sanchez.gonzales@bbva.com",
    "cesar.cuba@bbva.com",
    "jesus.cierralta@bbva.com",
    "luis.ramirez.baylon@bbva.com",
    "enrique.peinado@bbva.com",
    "jesus.almanza.martinez.contractor@bbva.com",
    "maritza.gonzalez.contractor@bbva.com",
    "angel.soto.requena.contractor@bbva.com",
    "jorge.arevalo.arica.contractor@bbva.com",
    "ray.lescano@bbva.com",
    "marcos.mera.contractor@bbva.com",
    "jack.guillen@bbva.com",
    "daniel.xoconostle.contractor@bbva.com",
    "jorge.mendoza.ortiz.contractor@bbva.com",
    "edgar.santos.contractor@bbva.com",
    "dora.guerrero.contractor@bbva.com",
    "fryda.palomino.contractor@bbva.com",
    "sbarrenechea@bbva.com",
    "jhessica.alvarez.contractor@bbva.com",
    "kelly.delacruz.oriundo.contractor@bbva.com",
    "carol.paucca.contractor@bbva.com",
  ];

  const isCorreo = () => {
    let isValidate = correosPermitidos.find((el) => el === email);
    return isValidate;
  };

  // ACCESO TODOS

  if (email !== isCorreo()) {
    return (
      <div className="MenuNav">
        <nav className="MenuNavList">
          <NavLink className="MenuNavList__link" to="/">
            <h3 className="MenuNavList__title">Home</h3>
          </NavLink>

          <h3 className="MenuNavList__title">PRs</h3>
          <ul>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/pr">
                <i className="fa fa-clipboard-list MenuNavList__link__icon"></i>
                Solicitud Revisión PR
              </NavLink>
            </li>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/checklist">
                <i className="fa fa-clipboard-list MenuNavList__link__icon"></i>
                Checklist
              </NavLink>
            </li>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/graphics/pr">
                <i className="fa fa-chart-line MenuNavList__link__icon"></i>
                Seguimiento Solicitudes
              </NavLink>
            </li>
          </ul>

          <h3 className="MenuNavList__title">Documentación</h3>
          <ul>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/estandares">
                <i className="far fa-newspaper MenuNavList__link__icon"></i>
                Estándares
              </NavLink>
            </li>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/talleres">
                <i className="far fa-newspaper MenuNavList__link__icon"></i>
                Talleres DQA
              </NavLink>
            </li>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/speech">
                <i className="far fa-newspaper MenuNavList__link__icon"></i>
                Speechs
              </NavLink>
            </li>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/label">
                <i className="far fa-newspaper MenuNavList__link__icon"></i>
                Labels JIRA
              </NavLink>
            </li>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/boletins">
                <i className="far fa-newspaper MenuNavList__link__icon"></i>
                Boletines
              </NavLink>
            </li>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/documents">
                <i className="far fa-newspaper MenuNavList__link__icon"></i>
                Formatos
              </NavLink>
            </li>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/tableros">
                <i className="far fa-newspaper MenuNavList__link__icon"></i>
                Tableros Data Hub
              </NavLink>
            </li>
          </ul>

          <h3 className="MenuNavList__title">Herramientas</h3>
          <ul>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/malla">
                <i className="fa fa-clipboard-list MenuNavList__link__icon"></i>
                Validador Mallas
              </NavLink>
            </li>
            <li className="MenuNavList__item">
              <a
                target="blank"
                className="MenuNavList__link"
                href="https://scalpy.azurewebsites.net"
              >
                <i className="fa fa-clipboard-list MenuNavList__link__icon"></i>
                Validador Ingestas
              </a>
            </li>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/jira">
                <i className="fa fa-clipboard-list MenuNavList__link__icon"></i>
                Validador JIRA
              </NavLink>
            </li>
            <li className="MenuNavList__item">
              <a
                target="blank"
                className="MenuNavList__link"
                href="https://docs.google.com/document/d/1FVliK1LB3Vz8Al8WVO0CO1DZ-JXueMwdS8e6ESNHZ4o/edit"
              >
                <i className="fa fa-clipboard-list MenuNavList__link__icon"></i>
                Generador C204
              </a>
            </li>
          </ul>

          <h3 className="MenuNavList__title">Extras</h3>
          <ul>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link" to="/project">
                <i className="fa fa-archive MenuNavList__link__icon"></i>
                Proyectos
              </NavLink>
            </li>
            <li className="MenuNavList__item">
              <NavLink className="MenuNavList__link dropdown" to="/graphics">
                <i className="fa fa-chart-line MenuNavList__link__icon"></i>
                Dashboards
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  // ACCESO DQA

  return (
    <div className="MenuNav">
      <nav className="MenuNavList">
        <NavLink className="MenuNavList__link" to="/">
          <h3 className="MenuNavList__title">Home</h3>
        </NavLink>

        <h3 className="MenuNavList__title">PRs</h3>
        <ul>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/pr">
              <i className="fa fa-clipboard-list MenuNavList__link__icon"></i>
              Solicitud Revisión PR
            </NavLink>
          </li>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/graphics/pr">
              <i className="fa fa-chart-line MenuNavList__link__icon"></i>
              Seguimiento Solicitudes
            </NavLink>
          </li>
        </ul>

        <h3 className="MenuNavList__title">Documentación</h3>
        <ul>
          <li className="MenuNavList__item">
            <a
              target="blank"
              className="MenuNavList__link"
              href="https://docs.google.com/document/d/1gTrDrHdwLyQlO5ftCLuMvV9h_mUOkVmPZbH3UOPWp20/edit"
            >
              <i className="far fa-newspaper MenuNavList__link__icon"></i>
              Starter Pack
            </a>
          </li>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/estandares">
              <i className="far fa-newspaper MenuNavList__link__icon"></i>
              Estándares
            </NavLink>
          </li>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/talleres">
              <i className="far fa-newspaper MenuNavList__link__icon"></i>
              Talleres DQA
            </NavLink>
          </li>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/speech">
              <i className="far fa-newspaper MenuNavList__link__icon"></i>
              Speechs
            </NavLink>
          </li>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/label">
              <i className="far fa-newspaper MenuNavList__link__icon"></i>
              Labels JIRA
            </NavLink>
          </li>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/boletins">
              <i className="far fa-newspaper MenuNavList__link__icon"></i>
              Boletines
            </NavLink>
          </li>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/documents">
              <i className="far fa-newspaper MenuNavList__link__icon"></i>
              Formatos
            </NavLink>
          </li>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/tableros">
              <i className="far fa-newspaper MenuNavList__link__icon"></i>
              Tableros Data Hub
            </NavLink>
          </li>
        </ul>

        <h3 className="MenuNavList__title">Reportes</h3>
        <ul>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/table">
              <i className="fa fa-clipboard-list MenuNavList__link__icon"></i>
              Tablero
            </NavLink>
          </li>
        </ul>

        <h3 className="MenuNavList__title">Herramientas</h3>
        <ul>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/malla">
              <i className="fa fa-clipboard-list MenuNavList__link__icon"></i>
              Validador Mallas
            </NavLink>
          </li>
          <li className="MenuNavList__item">
            <a
              target="blank"
              className="MenuNavList__link"
              href="https://scalpy.azurewebsites.net"
            >
              <i className="fa fa-clipboard-list MenuNavList__link__icon"></i>
              Validador Ingestas
            </a>
          </li>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/jira">
              <i className="fa fa-clipboard-list MenuNavList__link__icon"></i>
              Validador JIRA
            </NavLink>
          </li>
          <li className="MenuNavList__item">
            <a
              target="blank"
              className="MenuNavList__link"
              href="https://docs.google.com/document/d/1FVliK1LB3Vz8Al8WVO0CO1DZ-JXueMwdS8e6ESNHZ4o/edit"
            >
              <i className="fa fa-clipboard-list MenuNavList__link__icon"></i>
              Generador C204
            </a>
          </li>
        </ul>

        <h3 className="MenuNavList__title">Extras</h3>
        <ul>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link" to="/project">
              <i className="fa fa-archive MenuNavList__link__icon"></i>
              Proyectos
            </NavLink>
          </li>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link dropdown" to="/graphics">
              <i className="fa fa-chart-line MenuNavList__link__icon"></i>
              Dashboards
            </NavLink>
          </li>
          <li className="MenuNavList__item">
            <NavLink className="MenuNavList__link dropdown" to="/graphicsDQA">
              <i className="fa fa-chart-line MenuNavList__link__icon"></i>
              Dashboards DQA
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuNav;
