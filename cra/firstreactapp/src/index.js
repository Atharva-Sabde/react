import React from 'react';
import ReactDOM from 'react-dom/client';
import CompleteApp01 from './app01/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    {/* <h1> testing </h1> */}
    <CompleteApp01></CompleteApp01>
  </>

    //method 1
  // <React.Fragment>
  //   <h1>Hello React</h1>
  //   <p> paragraph </p>
  // </React.Fragment>

  // <div>
  //   <h1>Hello React</h1>
  //   <p> paragraph </p>
  // </div>

  // or we can use empty also
  // <>
  //   <h1>Hello React</h1>
  //   <p> paragraph </p>
  // </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
