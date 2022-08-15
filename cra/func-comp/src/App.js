import "./App.css"
// import SimpleProductCatalogue from './SimpProdCat/SimpleProductCatalogue';

import Simplestate from "./StateFunctional/simple-state";
import ContextProvider from "./Context-api/ContextProvider";

function App() {
  return (
    <>
       {/* <Simplestate></Simplestate> */}
       <ContextProvider/>
    </>

  );
}

export default App;
