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

const anotherUser = '  chai aur code  '

const reactElement = React.createElement(

    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotherUser

)
ReactDOM.createRoot(document.getElementById('root')).render(

   reactElement
)

// createRoot method behind the scene creates a dom like structure, just like the browser have a dom, so the createRoot method also creates a dom, why it creates a dom? because it compares the main dom and its own dom and updates the only thing that is changed/updated, in the ui, but on the otherhand the browser dom removes the enitire dom and repaints/re-render the entire dom and it is known as the PAGE RELOAD, thats why we see loading icon because the entire page structure is removed and again freshly reloaded, repaint means web structure is again made.


// but in virtual dom we can track the entire dom and can be traces in the tree like structure, and which values are changed are removed( old one) from the dom and changed values are again added(new one) in place of the old one.

// SO the js keeps its own track and make a virtual dom tree and keeps things updated in there.


// but what if some of the elements are dependent on network, so in that case we can use the useEffect hook, which is used to perform side effects in function components, and it runs after the render is committed to the screen. It can be used to fetch data from an API, set up a subscription, or manually change the DOM in React components. By using useEffect, we can ensure that our component updates correctly when the data from the network changes.