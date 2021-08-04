const carro={
    id:1,
    marca:'toyota',
    color:'rojo',
    placa:'FFFFFF',
    object:{
        clave:'valor'
    },
    sumar:(a,b)=>{
        return a+b;
    }
}
const {marca,color,object:{clave},sumar}=carro;

console.log(sumar(3,4))