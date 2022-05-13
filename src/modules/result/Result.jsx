import React from 'react';

const Result = (props) => {
    return (
        <div className='result'>
            {props.name}
            <br />
            Region: {props.region}
            <br />
            Size of a country: {props.size} m<sup>2</sup>
        </div>
    );
}

export default Result;
