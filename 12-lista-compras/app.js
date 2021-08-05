const formulario=document.getElementById('formulario');
const productInput=document.getElementById('producto');
const cantidadInput=document.getElementById('cantidad');
const list=document.getElementById('list-id');
formulario.addEventListener('submit',agregarLista);

function agregarLista(e){
    e.preventDefault();
    agregarProductoLista(productInput.value,cantidadInput.value)
    productInput.value=''
    cantidadInput.value=''
}

const agregarProductoLista=(nombre,cantidad)=>{
    const li=document.createElement('li');
    li.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    li.innerHTML=`
    <p>${nombre}</p>
    <div>
      <span class="badge badge-dark badge-pill">${cantidad}</span>
      <span class="badge badge-danger badge-pill">X</span>
      <span class="badge badge-primary badge-pill">C</span>
    </div>
    `
    list.appendChild(li)
}

list.addEventListener('click',ejecutarAccion)

function ejecutarAccion(e){
    if(e.target.classList.contains('badge-primary')){
        e.target.parentElement.parentElement.classList.add('list-group-item-info')
    }else if(e.target.classList.contains('badge-danger')){
        e.target.parentElement.parentElement.remove()
    }
}
