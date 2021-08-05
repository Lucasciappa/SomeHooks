import React from 'react';

export const Small = React.memo( ({value}) => {

    console.log("llamo :(");
    return (
        <small>{value}</small>
    )
} );