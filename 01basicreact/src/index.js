// import React from 'react';  // core foundational library of react which takes the reference of react and convert it into html.

// import ReactDOM from 'react-dom/client';// this is implementation of  react in the web environment just like react native is for mobile environment.

// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <App />  // now we are able to write html using js.



    
// ); 


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(

//     <App />
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />

)


//react strict mode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

// it is not necessary to use strict mode but it is a good practice to use it in order to find potential problems in the application.