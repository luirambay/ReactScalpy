import React from "react";

import ErrorImage from "../../public/assets/pagenotfound.svg";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <img src={ErrorImage} alt="Error404" />
    </div>
  );
};

export default ErrorPage;
