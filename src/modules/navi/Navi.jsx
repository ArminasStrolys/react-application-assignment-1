import React from "react";

const Navi = () => {
  return (
    <div className="main-nav">
      <form className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="button1">Oceania only</button>
        <button className="button2">Smaller than LTU</button>
        <button className="button3">{`\u25B2`}ASC {`\u25BC`}DEC</button>
      </form>
    </div>
  );
};

export default Navi;
