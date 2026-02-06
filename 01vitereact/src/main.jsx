// import App from './App.jsx'
// import React from 'react'
// import ReactDOM from 'react-dom/client'

// ReactDOM.createRoot(document.getElementById('root')).render(

//     <App />

// ) 


// // const root = ReactDOM.createRoot(document.getElementById('root'));

// // root.render(
// //     <App />
// // )

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //     <App />
// // )

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from '/App.jsx'


// function MyApp() {

//     return {
//         <div>
//         <h1> </h1></div>
//     }

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>Planet Caravan!</h1>
        </div>
    )
}

// const reactElement = {

//     type: 'a',
//     props: {href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
//     }

const anotherElement = (
    <a href="https://google.com" target='_blank'> Visit google</a>
)

const reactElement = React.createElement(

    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google'

)
ReactDOM.createRoot(document.getElementById('root')).render(

   reactElement
)