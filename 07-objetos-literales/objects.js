const carro={
    id:1,
    marca:'toyota',
    color:'rojo',
    placa:'FFFFFF'
}
//acceder a valor 
 console.log(carro.marca)
 console.log(carro['placa'])

 //agregar propiedad
 carro.año=2020;

 console.log(carro)

 delete carro.placa
 console.log(carro)


 
 

