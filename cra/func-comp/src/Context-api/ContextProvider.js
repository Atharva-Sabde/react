import React from 'react';
import SimpleContext from './ContextCreation';

import ContextUser1 from './ContextUser1'
import ContextUser2 from './ContextUser2';

function ContextProvider() {

    const conValue= "Atharva";
    return (
        <>
            <SimpleContext.Provider value={conValue}>
                <ContextUser1 />
                <ContextUser2 />

            </SimpleContext.Provider>
        </>
    )
}

export default ContextProvider;