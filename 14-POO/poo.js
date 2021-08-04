//objeto literal
/*
const persona={
    nombre:'Stivens',
    carrera:'Sistemas'
}

const persona2={
    nombre:'Huan',
    carrer:'Mecanica'
}

console.log(persona,persona2)*/


//funciones

function Animal(nombre,tipo) {
    this.nombre=nombre,
    this.tipo=tipo
    this.correr=function(){
        console.log(`${this.nombre} correeee`)
    }
}
const animal=new Animal('gato','felino')
const animal2=new Animal('perro','felino')
animal2.correr();


//class

class Persona {
    constructor(nombre,apellidos) {
        this.nombre=nombre
        this.apellidos=apellidos
    }

    comer(){
        console.log(`${this.nombre} esta comiendo`)
    }
}

const persona=new Persona('Stivens','Espinoza');
persona.comer()