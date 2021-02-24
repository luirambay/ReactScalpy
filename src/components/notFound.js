import React from "react";

import NotFoundImage from "../../public/assets/NotFound.svg";

const NotFound = () => {
  return (
    <div className="NotFound">
      <img src={NotFoundImage} alt="DataFound" width="100%" />
    </div>
  );
};

export default NotFound;
