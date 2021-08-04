const formulario=document.getElementById('formulario');
const productInput=document.getElementById('producto');
const cantidadInput=document.getElementById('cantidad');
const list=document.getElementById('list-id');

productInput.addEventListener('change',handleInputChange)
cantidadInput.addEventListener('change',handleInputChange)
formulario.addEventListener('submit',setProduct)
list.addEventListener('click',handleAction)

let listProducts=[];
let formValues={
    isActive:true
}

function handleInputChange(e) {
    formValues={
        ...formValues,
        [e.target.name]:e.target.value
    }
    console.log(formValues)
}

function setProduct(e){
    e.preventDefault();
    listProducts=[
        ...listProducts,
        formValues
    ]
    paintProducts()
    formValues={
        isActive:true
    }
    productInput.value=''
    cantidadInput.value=''
}

function handleAction(e) {
    const producto=e.target.dataset.producto;
    if(e.target.classList.contains('badge-primary')){
        let productUpdate=listProducts.find(product=>product.producto === producto)
        productUpdate={
            ...productUpdate,
            isActive:!productUpdate.isActive
        }
        listProducts=[
            ...listProducts.filter(product=>product.producto !== producto ),
            productUpdate
        ]
        
    }else if(e.target.classList.contains('badge-danger')){
        listProducts=listProducts.filter(product=>product.producto !== producto )
        console.log(listProducts)
    }
    paintProducts()
}

//funciones de apoyo
const paintProducts=()=>{
    while(list.firstElementChild){
        list.firstElementChild.remove()
    }
    listProducts.forEach(product=>list.innerHTML+=productTemplate(product))
}

const productTemplate=({cantidad,producto,isActive})=>{
    return `
    <li class="list-group-item d-flex justify-content-between align-items-center ${!isActive && 'list-group-item-info'}">
        <p>${producto}</p>
        <div>
        <span class="badge badge-dark badge-pill">${cantidad}</span>
        <span class="badge badge-danger badge-pill" data-producto=${producto}>X</span>
        <span class="badge badge-primary badge-pill" data-producto=${producto}>C</span>
        </div>
    </li>
    `
}