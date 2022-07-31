import React from 'react';
import ReactDOM from 'react-dom/client';

import ClassCompDemo from './ClassComponentDemo/ClassCompDemo';
import ClassCompPropDemo from './ClassComponentDemo/ClassCompPropDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    {/* <ClassCompDemo></ClassCompDemo> */}
  
    <ClassCompPropDemo  name="Atharva" id="4320" eligible="true"></ClassCompPropDemo>
  </>
);


