let persona={ //const
    nombre:'Stivens',
    edad:22,
}
/*persona={ //error
    nombre:'Carlos',
    edad:22,
}*/

//persona.nombre='Carlos' -->funciona

/*persona.freeze()
persona.nombre='Carlos'*/

//persona.talla='177'

//const inputForm=prompt('Ingrese llave: ')
persona={
    ...persona,
    [inputForm]:'nose'
}
console.log(persona)