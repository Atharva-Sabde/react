import React,{useContext} from 'react';
import SimpleContext from './ContextCreation';

function ContextUser2(){
    const name = useContext(SimpleContext)
    return(
        <>
            <h1> Testing name in Comp2 : {name}</h1>
        </>
    )
}

export default ContextUser2;