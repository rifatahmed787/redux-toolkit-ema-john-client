import React from "react";
import "./DotSpinner.css";

const DotSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="dotted"></p>
      <p className="dotted"></p>
      <p className="dotted"></p>
    </div>
  );
};

export default DotSpinner;
