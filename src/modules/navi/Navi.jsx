import React from "react";

const Navi = () => {
  return (
    <div className="main-nav">
      <form className="search-bar">
        <input type="text" placeholder="Search..." />
          <button className="button1">ONE</button>
          <button className="button2">TWO</button>
          <button className="button3">THREE</button>
      </form>
    </div>
  );
};

export default Navi;
