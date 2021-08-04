//EVENTOS EN JS
 //----seleccionar elemento

const agregarCompra=document.querySelector('#agregar-compra');
//eventos mouse
/*agregarCompra.addEventListener('click',function (){
    console.log('agregandio')
})
*/

/*
agregarCompra.addEventListener('click',()=>{
    console.log('agregando')
})
*/

agregarCompra.addEventListener('dblclick',addCart);

function addCart(e){
    console.log(e.target.parentElement)
}
/*
agregarCompra.addEventListener('mousemove',function(){
    console.log('paso el mouse')
})
*/

//Eventos en el input

const inputEvento=document.getElementById('input-evento')
const formulario=document.getElementById('formulario');
let formValue={
}

inputEvento.addEventListener('change',handleChange)

function handleChange(e) {
    formValue={
        ...formValue,
        [e.target.name]:e.target.value
    }
    console.log(formValue)
}

formulario.addEventListener('submit',enviarValor)
function enviarValor(e) {
    e.preventDefault()
    const {eventName}=formValue;
    console.log(`se envio ${eventName}`)
}