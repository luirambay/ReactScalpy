import React, { useRef, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import MenuToggle from "./MenuToggle";

import { Link } from "react-router-dom";
import MenuUser from "./MenuUser";
import MenuNav from "./menuNav";
import SwitchMode from "./SwitchMode";

import Logo from "../../public/assets/logo-landscape.svg";

const Menu = () => {
  const [data, setData] = useState({
    toggleActive: false,
  });

  const menuRef = useRef();
  const menuToggleRef = useRef();

  function handleMenuHide() {
    menuRef.current.classList.remove("showMenu");
    menuToggleRef.current.classList.remove("MenuToggleOpen");

    setData({
      toggleActive: false,
    });
  }

  function handleMenuShow() {
    menuRef.current.classList.add("showMenu");
    menuToggleRef.current.classList.add("toggleOpen");

    setData({
      toggleActive: true,
    });
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <MenuToggle
          handleMenuToggle={data.toggleActive ? handleMenuHide : handleMenuShow}
          menuToggle={menuToggleRef}
          iconToggle={
            data.toggleActive
              ? "fa fa-angle-left MenuToggle__icon"
              : "fa fa-bars MenuToggle__icon"
          }
        />,
        document.getElementById("toggleMenu")
      )}
      <section className="Menu" ref={menuRef}>
        <div className="MenuLogo">
          <Link className="MenuLogo__link" to="/">
            <img src={Logo} width={180} alt="Logo" />
          </Link>
        </div>

        <div className="MenuExtraElements">
          <div className="MenuExtraElements__BoxHidden"></div>
          <div className="MenuExtraElements__components">
            <MenuUser />
            <SwitchMode />

            <MenuNav isActive={true} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Menu;
