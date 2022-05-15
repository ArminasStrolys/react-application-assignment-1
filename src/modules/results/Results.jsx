import React from 'react';
import Result from '../result/Result';
import { useState, useEffect } from 'react';

const Results = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v2/all?fields=name,region,area")
          .then((res) => res.json())
          .then((data) => setCountries(data))
          .catch((error) => console.log(error));
      }, []);
    
    //   setCountry(data)
    
        //   {book.map((e) => (
        //     <Books
        //       key={e.id}
        //     />
        //   ))}

    return (
        <div>
        {countries.map((country, index)=>(
            <Result
        key={index}
        name={country.name}
        region={country.region}
        size={country.area}
            />
        ))}
        </div>
    );
}

export default Results;
