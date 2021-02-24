import React from "react";

import useGetUserInfo from "../customHooks/useGetUserInfo";

const MenuUser = () => {
  const [
    btnActive,
    ,
    userName,
    userPhoto,
    handleAuthClick,
    handleSignoutClick,
  ] = useGetUserInfo();

  return (
    <div className="MenuUser">
      <img className="MenuUser__photo" src={userPhoto} />
      <h4 className="MenuUser__name">{userName}</h4>
      {btnActive ? (
        <button className="MenuUserButtonLogin" onClick={handleAuthClick}>
          Conectarse
        </button>
      ) : (
        <button className="MenuUserButtonLogin" onClick={handleSignoutClick}>
          Cerrar sesión
        </button>
      )}
    </div>
  );
};

export default MenuUser;
