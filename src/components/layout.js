import React from "react";
// import SwitchMode from "./SwitchMode";
import propTypes from "prop-types";
import Menu from "./menu";

const Layout = (props) => {
  return (
    <div className="LayoutContainer">
      <Menu />
      <div className="LayoutContainer__content">{props.children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: propTypes.object,
};

export default Layout;
