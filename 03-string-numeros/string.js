const lg=console.log;
//declarando string
let cadena='Hola ';
let nombre='Stivens'
let cadenaCompleta=cadena+nombre
//console.log('buenas tardes '+ cadenaCompleta)

//String Methods

//length
const texto=' Mucho texto para esta linea ';
//lg(texto.length)


//indexOf
console.log(texto.indexOf('t'))

//slice

//lg(texto.slice(-5))

//substring no acepta negativos

/*replace

let textoNuevo=texto.replace('Mucho','Cambio de');
console.log(textoNuevo)

*/

//toUpperCase toLowerCase

//console.log(texto.toUpperCase())

//concat

//trim : trim elimina espacios en blanco
console.log(texto)
console.log(texto.trim())

//split:convertir a matriz
console.log(texto.split(' '))
