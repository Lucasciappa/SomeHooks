import React, { useState } from 'react';

import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import "../02.useEffect/effects.css";



export const Memorize = () => {

    const {counter, increment} = useCounter(0);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <hr/>
            <h3>Counter: <Small value={counter} /></h3>

            <button
                className="btn btn-primary"
                onClick={increment}>
                +1
            </button>

            <button
                className="btn btn-outline-primary m-3"
                onClick={ () => {
                    setShow(!show);
                }}>
                Show/Hide: {JSON.stringify(show)}
            </button>

        </div>
    )
}