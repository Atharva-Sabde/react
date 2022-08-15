import React, {useContext}  from 'react';
import SimpleContext from './ContextCreation';

function ContextUser1(){
    const Name = useContext(SimpleContext);
    return(
        <>
            <h1> Testing name in Comp1 : {Name} </h1>
        </>
    )
}

export default ContextUser1;