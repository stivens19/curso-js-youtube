class Persona {
    constructor(nombre,apellidos,carrera) {
        this.nombre=nombre
        this.apellidos=apellidos
        
    }
    set setCarrera(carrera){
        this.carrera=carrera;
    }
    get getCarrera(){
        return this.carrera;
    }
    comer(){
        console.log(`${this.nombre} esta comiendo`)
    }
}

const persona=new Persona('Stivens','Espinoza');

persona.setCarrera='Sistemas'

console.log(persona.getCarrera)