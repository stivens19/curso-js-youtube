const $ = q => document.querySelector(q);

const listaProducts = $('#product-list');
const cajaAlerta = $('#alerta');
const productCartItems=$('#product-cart-items')
const agregarCompra=$('#agregar-compra')

listaProducts.addEventListener('click', agregarCarrito);

//final 
productCartItems.addEventListener('click',eliminarProducto)

//final final
agregarCompra.addEventListener('click',guardarCompra)

let carrito = []

function agregarCarrito(e) {
    if (e.target.classList.contains('btn-comprar')) {
        e.preventDefault()
        const producto = {
            nombre: capturarValor(e, 0).textContent,
            imagen:e.target.parentElement.parentElement.children[0].src,
            descripcion: capturarValor(e, 1).textContent,
            cantidad: capturarValor(e, 3).value
        }
        if (producto.cantidad * 1 === 0) {
            alerta('danger', 'Debe ser una cantidad superior a 0')
            return
        }
        if (carrito.find(productoc => productoc.nombre === producto.nombre)) {
            alerta('danger', 'Ya existe este elemento');
            return
        }
        //adicionando elemnto al carrito
        adicionarArray(producto)
        //limpiando el number input
        capturarValor(e, 3).value=0;
        //leyendo carrito para actualizar
        leerCarrito()

        console.log(carrito)
    }
}

function eliminarProducto(e){
    if(e.target.classList.contains('btn-eliminar')){
        const nombreE=e.target.dataset.nombre;
        console.log(nombreE)

        eliminarArray(e.target.dataset.nombre)

        leerCarrito();
    }
}

function guardarCompra(){
    localStorage.setItem('productos',JSON.stringify(carrito));
    alerta('success','Se realizò la Compra')
    carrito=[];
    leerCarrito();
    leerStorage();
}

//funciones de apoyo
const adicionarArray = object => carrito = [...carrito, object];
const capturarValor = (e, i) => e.target.parentElement.children[i];
const eliminarArray=(elemento)=>carrito=carrito.filter(producto=>producto.nombre.replace(/ /g, "") !== elemento)

const alerta = (tipo, mensaje) => {
    cajaAlerta.innerHTML = `
        <div class="alert alert-${tipo}" role="alert">
            ${mensaje}
        </div>
    `
    setTimeout(() => cajaAlerta.innerHTML = '', 3000);
}
const leerCarrito=()=>{
    productCartItems.innerHTML='';
    carrito.forEach(product=>{
        productCartItems.innerHTML+=productItemTemplate(product);
    })
}
const productItemTemplate = ({nombre,imagen,descripcion,cantidad}) => (
    `
    <div class="row product-item">
        <div class="col-5">
        <img style="width: 100%;" src="${imagen}" alt="${nombre}">
        </div>
        <div class="col-7">
            <h6>${nombre}</h6>
            <p>${descripcion}</p>
            <span class="badge badge-primary p-3">${cantidad}</span>
            <button class="btn btn-danger btn-eliminar" data-nombre=${nombre.replace(/ /g, "")}>X</button> 
        </div>
    </div>

    `
)

//leer storage
const tableBody=$('#table-body');
const leerStorage=()=>{
    const carritoTable=JSON.parse(localStorage.getItem('productos'));
    tableBody.innerHTML='';
    carritoTable.forEach(product=>{
        tableBody.innerHTML+=productTableTemplate(product)
    })
}

//template table
const productTableTemplate=({imagen,nombre,cantidad,descripcion})=>(
    `
    <tr>
        <td>
            <img style="width:120px;" src="${imagen}" alt="${nombre}">
        </td>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${descripcion}</td>
    </tr>
    `
)
leerStorage()
