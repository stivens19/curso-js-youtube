//Navegando por el dom
const $=q=>document.querySelector(q);

const elemento=$('.btn-primary')
//subir de nivel
elemento.parentElement.style.backgroundColor='gray'
console.log(elemento.parentElement.parentElement)

//previo
console.log(elemento.previousSibling.previousSibling)
console.log(elemento.previousElementSibling)

//siguiente
console.log(elemento.nextSibling.nextSibling)

console.log(elemento.nextElementSibling)

//ultimo hijo
console.log(elemento.parentElement.lastElementChild)

//primer hijo
console.log(elemento.parentElement.firstElementChild)

//hijos
console.log(elemento.parentElement.children[3])



///remover elemento
//elemento.parentElement.children[3].remove()

//remover child
//elemento.parentElement.removeChild(elemento.parentElement.firstElementChild)

//reemplazar y crear
let h1=document.createElement('h1')
h1.textContent='Hola'
//elemento.parentElement.replaceChild(h1,elemento.parentElement.firstElementChild)

//agregar

elemento.parentElement.appendChild(h1)