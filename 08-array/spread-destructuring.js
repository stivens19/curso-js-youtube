//destructuring
const array=[
    'valor',
    (a,b)=>{
        return a+b
    }
]

const [formValue,funcion] = array;

console.log(funcion(4,3))


//spread

const nombres=[
    'luis','maria','jose','carlos','etc'
]
const nombres2=[
    'luis2','maria2','jose2','carlos2','etc2'
]

//console.log(nombres.concat(nombres2))

console.log([...nombres2,...nombres])


const frutas = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5},
    {nombre: 'naranja', cantidad: 2}
];

console.log([
    {
        nombre:'pera',
        cantidad:0
    },
    ...frutas
])
