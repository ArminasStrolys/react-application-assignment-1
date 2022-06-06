import React, { useState } from "react";
import Results from "../results/Results";

const Navi = () => {
  const [filterBool, setFilterBool] = useState(false);
  const [ocea, setOcea] = useState(false);
  const [larger, setLarger] = useState(false);

  const handleAscDsc = (e) => {
    e.preventDefault();
    filterBool === true ? setFilterBool(false) : setFilterBool(true);
  };
  const handleOcean = (e) => {
    e.preventDefault();
    ocea === true ? setOcea(false) : setOcea(true);
  };
  const handleLtu = (e) => {
    e.preventDefault();
    larger === true ? setLarger(false) : setLarger(true);
  };

  return (
    <>
      <div className="main-nav">
        <form className="search-bar">
          <input type="text" />
          <button
            className={ocea === false ? "button1" : "button1active"}
            onClick={handleOcean}
          >
            Oceania only
          </button>
          <button
            className={larger === false ? "button2" : "button2active"}
            onClick={handleLtu}
          >
            Smaller than LTU
          </button>
          <button
            className={filterBool === false ? "button3" : "button3active"}
            onClick={handleAscDsc}
          >
            {`\u25B2`}ASC {`\u25BC`}DSC
          </button>
        </form>
      </div>
      {<Results ascDsc={filterBool} ocea={ocea} ltu={larger} />}
    </>
  );
};

export default Navi;
