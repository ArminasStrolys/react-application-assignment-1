import React from "react";
import Result from "../result/Result";
import { useState, useEffect } from "react";

const Results = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
          {/* {countries.filter((a,b)=>console.log(a))} */}
      {/* {countries.map((country, index) => (
        <Result
          key={index}
          name={country.name}
          region={country.region}
          size={country.area}
        />
      ))} */}
      {countries.map((country, index) => (
        country.region === 'Oceania' && 
        <Result
          key={index}
          name={country.name}
          region={country.region}
          size={country.area}
        />
      ))}

    </div>
  );
};

export default Results;
