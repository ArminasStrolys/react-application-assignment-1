import React from "react";
import Result from "../result/Result";
import { useState, useEffect } from "react";
import { Pagination } from "../pagination/Pagination";

const Results = (props) => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="results">
      {currentPosts.map(
        (country, index) => (
          props.ascDsc === false
            ? countries.sort((a, b) => a.name.localeCompare(b.name))
            : countries.sort((a, b) => b.name.localeCompare(a.name)),
          (
            <Result
              key={index}
              name={country.name}
              region={country.region}
              size={country.area}
            />
          ) && props.ltu === true ? (
            (country.area >= 65300 && (
              <Result
                key={index}
                name={country.name}
                region={country.region}
                size={country.area}
              />
            )) ||
            (props.ltu === true && props.ocea === true) ? (
              country.region === "Oceania" &&
              country.area <= 65300 && (
                <Result
                  key={index}
                  name={country.name}
                  region={country.region}
                  size={country.area}
                />
              )
            ) : (
              <Result
                key={index}
                name={country.name}
                region={country.region}
                size={country.area}
              />
            )
          ) : props.ocea === true ? (
            country.region === "Oceania" && (
              <Result
                key={index}
                name={country.name}
                region={country.region}
                size={country.area}
              />
            )
          ) : (
            <Result
              key={index}
              name={country.name}
              region={country.region}
              size={country.area}
            />
          )
        )
      )}
    </div>
  );
};

export default Results;

// LTU size 65300
