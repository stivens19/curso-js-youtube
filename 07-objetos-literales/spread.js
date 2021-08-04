const object1={
    nombre:'Stivens',
    apellido:'Espinoza'
}
const object2={
    edad:22,
    año:1999
}

const union=Object.assign(object1,object2);

//console.log(union)

const union2={
    ...object1,
    ...object2,
    pais:'Perù'
} 
console.log(union2)