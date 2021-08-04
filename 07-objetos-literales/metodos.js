let persona = {
    nombre:'Stivens',
    saludar:function(){
        console.log(`hola ${this.nombre}`)
    },
    correr(){
        console.log(`correeeee ${this.nombre}`)
    }
};

//persona.saludar();

/*persona.despedida=function(){
    console.log(`Adios ${this.nombre}`)
}
*/
//persona.despedida()

const {correr}=persona;


persona.correr()
//////////////Problemas comunes Las funciones de flecha son especiales: ellas no tienen su “propio” this. Si nosotros hacemos referencia a this desde tales funciones, esta será tomada desde afuera de la función “normal”.

const animal={
    tipo:'Felino',
    comer:()=>{
        console.log(`el ${this.tipo} come carne`)
    }
}

animal.comer();