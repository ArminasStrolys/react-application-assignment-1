import React from "react";

const Result = (props) => {
  return (
    <div className="result">
      {props.name}
      <br />
      Region: {props.region}
      <br />
      Size of a country:{" "}
      {props.size ? props.size + `${" m\u00B2"}` : "no official data"}
    </div>
  );
};

export default Result;
