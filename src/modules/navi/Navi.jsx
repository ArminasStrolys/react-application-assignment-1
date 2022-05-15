import React from "react";

const Navi = () => {
  return (
    <div className="main-nav">
      <form className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="button1">{`\u25B2`}ASCENDING</button>
        <button className="button2">{`\u25BC`}DECENDING</button>
        <button className="button3">By area/Oceania region</button>
      </form>
    </div>
  );
};

export default Navi;
