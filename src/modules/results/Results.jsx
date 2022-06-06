import React from "react";
import Result from "../result/Result";
import { useState, useEffect } from "react";
import { Pagination } from "../pagination/Pagination";

const Results = (props) => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  let a = [];
  let b = [];
  let c = [];
  a = countries.filter((country) => country.region === "Oceania");
  b = countries.filter((country) => country.area <= 65300);
  c = b.filter((country) => country.region === "Oceania");

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostsA = a.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostsB = b.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostsC = c.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="results">

      {props.ocea === true && props.ltu === true
        ? currentPostsC.map(
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
              )
            )
          )
        : props.ltu === true
        ? currentPostsB.map(
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
              )
            )
          )
        : props.ocea === true
        ? currentPostsA.map(
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
              )
            )
          )
        : currentPosts.map(
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
              )
            )
          )}

      {props.ocea === true ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={a.length}
          paginate={paginate}
        />
      ) : props.ltu === true ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={b.length}
          paginate={paginate}
        />
      ) : props.ocea === true && props.ltu === true ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={c.length}
          paginate={paginate}
        />
      ) : (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={countries.length}
          paginate={paginate}
        />
      )}
    </div>
  );
};

export default Results;
