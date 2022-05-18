import React, { useState } from "react";
import Results from "../results/Results";

const Navi = () => {
  const [filterBool, setFilterBool] = useState(false);
  const [ocea, setOcea] = useState(false);

  const handleAscDsc = (e) => {
    e.preventDefault();
    filterBool === true ? setFilterBool(false) : setFilterBool(true);
    console.log(filterBool);
  };
  const handleOcean = (e) => {
    e.preventDefault();
    ocea === true ? setOcea(false) : setOcea(true);
    console.log(ocea);
  };

  return (
    <>
      <div className="main-nav">
        <form className="search-bar">
          <input type="text" placeholder="Should this be search...?" />
          <button className="button1" onClick={handleOcean}>Oceania only</button>
          <button className="button2">Smaller than LTU</button>
          <button className="button3" onClick={handleAscDsc}>
            {`\u25B2`}ASC {`\u25BC`}DSC
          </button>
        </form>
      </div>
      {<Results ascDsc={filterBool} ocea={ocea} />}
    </>
  );
};

export default Navi;
