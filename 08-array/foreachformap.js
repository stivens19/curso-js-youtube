const nombres=[
    'jose','maria','carlos','diego','lucho','mas'
]

/*
nombres.forEach(nombre=>{
    console.log(nombre.toUpperCase())
})
*/
/*
nombres.map(nombre=>{
    console.log(nombre.toUpperCase())
})
*/

//diferencia
const mayusculas=nombres.forEach(nombre=>nombre.toUpperCase());
console.log(mayusculas)

const mayus2=nombres.map(nombre=>nombre.toUpperCase())
console.log(mayus2)