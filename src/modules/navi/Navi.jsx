import React, { useState } from 'react';
import Results from '../results/Results';

const Navi = () => {

  const [oceaniaFilter, setOceaniaFilter] = useState(false);

  const handleOceania = (e) => {
    e.preventDefault()
    oceaniaFilter === true ? setOceaniaFilter(false) : setOceaniaFilter(true)
    console.log(oceaniaFilter);
  };

  return (
    <div className="main-nav">
      <form className="search-bar">
        <input type="text" placeholder="Search..."/>
        <button className="button1" onClick={handleOceania}>Oceania only</button>
        <button className="button2">Smaller than LTU</button>
        <button className="button3">{`\u25B2`}ASC {`\u25BC`}DEC</button>
        {<Results oceania={oceaniaFilter}/>}
      </form>
    </div>
  );
};

export default Navi;
