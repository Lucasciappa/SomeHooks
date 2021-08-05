import React, { useState } from 'react';
import "../02.useEffect/effects.css";

import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';



export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    };

    return (
        <div>
            <h1>Real Example 'useRef'</h1>
            <hr/>

            { show && <MultipleCustomHooks />}

            <button 
                className="btn btn-warning mt-3"
                onClick={toggle}>
                Show | Hide
            </button>


        </div>
    )
}
