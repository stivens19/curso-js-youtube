//modificar elemento de texto
const navbarBrand=document.querySelector('.navbar-brand');
console.log(navbarBrand)
navbarBrand.textContent='La tiendita'
console.log(navbarBrand.textContent)
navbarBrand.innerHTML='<h1>Tine'

//imagen
//https://developer.mozilla.org/es/docs/Web/API/HTMLStyleElement

const imagen=document.querySelector('img');
imagen.src='https://cdn.pixabay.com/photo/2016/09/30/11/13/coffee-tin-1705026_960_720.jpg'

//estilos
const $=q=>document.querySelector(q);

const card=$('.card h5');
card.style.background="blue"
card.style.color="white"
card.style.textAlign="center"

card.className="style-js"
card.classList.add('style2')

//card.classList.remove('style2');
console.log(card.classList.contains('style-js'))