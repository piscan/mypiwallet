import React, { useEffect, useState } from 'react';
import Imported from './Imported';

function Wallet() {

    const [keys, setKeys] = useState([]);
    useEffect(() => {

        setKeys(Object.keys(localStorage));

    }, [])

    return (
        <>
            {localStorage.length === 0 ?
                <div className="container">
                    <br />
                    <div className="has-text-centered is-size-3 ">

                        No Wallet Imported Yet.

            </div>
                </div>
                :
                <div>
                    <div className="columns">
                        <div className="column is-three-fifths is-offset-one-fifth">

                            {
                                keys.map((k) => (
                                    <Imported name={k} key={k} />
                                ))
                            }

                        </div>
                    </div>

                </div>
            }
        </>
    );
}

export default Wallet; 
