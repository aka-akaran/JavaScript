


const rootNode = document.getRootNode() ;

// child Node
const htmlElementNode = rootNode.childNodes[0] ;


// head, text, body as chid of html node
const headElementNode = htmlElementNode.childNodes[0] ;
const textNode1 = htmlElementNode.childNodes[1] ;
const bodyHtmlElement = htmlElementNode.childNodes[2] ;

console.log(headElementNode, textNode1, bodyHtmlElement) ;


// parent Node
console.log(headElementNode.parentNode) ;


// next Sibling
console.log(headElementNode.nextSibling) ;
console.log(headElementNode.nextSibling.nextSibling) ;

// if you want to skip the textNode sibling
console.log(headElementNode.nextElementSibling) ;


// want children without text Node -->children v/s childNodes
const container = document.querySelector(".container") ;
console.log(container.children) ;
console.log(container.childNodes) ;
