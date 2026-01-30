function customRender(reactElement, container) {
    domElement.innerHtml = reactElement.children 
}
const reactElement = {
    type; 'a'
    props: {
        href: 'https://google.com'
        target: '_blank'
    },

    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)

