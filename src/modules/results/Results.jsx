import React from "react";
import Result from "../result/Result";
import { useState, useEffect } from "react";

const Results = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="results">
      {(countries.map((country, index) => (
        props.ascDsc === false ? 
        countries.sort((a, b) => a.name.localeCompare(b.name)) :
        countries.sort((a, b) => b.name.localeCompare(a.name)),
        <Result
          key={index}
          name={country.name}
          region={country.region}
          size={country.area}
        />
      )))}

      {(countries.map((country, index) => (
        
country.region === 'Oceania' && 
        <Result
          key={index}
          name={country.name}
          region={country.region}
          size={country.area}
        />
      )))}

      {/* {countries.map((country, index) => (
        country.region === 'Oceania' && 
        <Result
          key={index}
          name={country.name}
          region={country.region}
          size={country.area}
        />
      ))} */}
      {/* {countries.map((country, index) => (
        country.area <= 65300 && 
        <Result
          key={index}
          name={country.name}
          region={country.region}
          size={country.area}
        />
      ))} */}
      {/* {countries.map((country, index) => (
        country.area <= 65300 && 
        <Result
          key={index}
          name={country.name}
          region={country.region}
          size={country.area}
        />
      ))} */}
      
    </div>
  );
};

export default Results;

// LTU size 65300