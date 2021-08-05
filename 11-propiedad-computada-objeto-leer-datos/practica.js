const formulario=document.getElementById('formulario')
const email=document.getElementById('email')
const nombres=document.getElementById('nombres')
const sexo=document.getElementById('sexo')
const usuario=document.getElementById('usuario')
let formValues={}

email.addEventListener('change',handleInputChange)
nombres.addEventListener('change',handleInputChange)
sexo.addEventListener('change',handleInputChange)

function handleInputChange(e){
    //console.log(e.target.value)
    formValues={
        ...formValues,
        [e.target.name]:e.target.value
    }
    console.log(formValues)
}

formulario.addEventListener('submit',setUser);

function setUser(e) {
    e.preventDefault()
    usuario.innerHTML=templateUser(formValues)
    formValues={}
    email.value=''
    nombres.value=''
    sexo.value=''
}

const templateUser=(user)=>(`
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${user.nombres}</h5>
            <p class="card-text">${user.email}</p>
            <p class="card-text">${user.sexo}</p>
        </div>
    </div>
`)
