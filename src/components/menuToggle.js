import React from "react";
import propTypes from "prop-types";

const MenuToggle = (props) => {
  return (
    <div
      className="MenuToggle"
      onClick={props.handleMenuToggle}
      ref={props.menuToggle}
    >
      <i className={props.iconToggle}></i>
    </div>
  );
};

export default MenuToggle;

MenuToggle.propTypes = {
  handleMenuToggle: propTypes.func,
  menuToggle: propTypes.object,
  iconToggle: propTypes.string,
};
