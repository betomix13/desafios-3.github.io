
//defino variables

let total = 0
let continuar = "S"
let precioFinal = 0
guardarLocalStorage("total",0)
const productos = []

//defino dom



//const prodAlistados = document.getElementById("prodAlistados")
const vaciarCarrito = document.getElementById("vaciarCarrito")
//const precioTotal = document.getElementById("precioTotal")
const pulsar = document.getElementById("verProd")
const precioTotal = document.getElementById("totality")
//traigo con id 

let prod1= document.getElementById("prod1")
let prod2= document.getElementById("prod2")
let prod3= document.getElementById("prod3")


let listaProd =document.getElementById("productos")
listaProd.onclick =function(e){
    e.preventDefault()
    let opc = e.target.id
    

    if (opc == "prod1"){
        fetching(0)
    }else if(opc == "prod2"){
        fetching(1)
    }else if(opc =="prod3"){
       fetching(2)
    }else {
      console.log("error")
    } 
}

//defino funciones


const fetching=async(id)=>{

    const respu=await fetch ('/producto.json')
        const data =await respu.json()
        const item = data[id]
        console.log(item)
        cargaProd(item)
        avisar()
}

function guardarLocalStorage(key, value) {
    return localStorage.setItem(key, value)
}

function cargaProd(obj){
    precioFinal += obj.precio 
        guardarLocalStorage("total",precioFinal)
        productos.push(obj)
        guardarLocalStorage("listaProd",JSON.stringify(productos))
        mostrarItemsLocalStorage()
}
function mostrarItemsLocalStorage(){
    
    const listaPLS = JSON.parse(localStorage.getItem("listaProd"))
    listaPrev.textContent = ""

    for (const producto of listaPLS) {

        let currentProd = document.createElement("p")
        currentProd.innerHTML=(`<p>${producto.marca} ${producto.procesador} => ${producto.precio}<p>`)
        listaPrev.appendChild(currentProd)
    }
}

vaciarCarrito.onclick = function (e) {
    listaPrev.textContent = ""
    precioTotal.textContent = ""
    localStorage.clear()
    guardarLocalStorage("total", 0)
    productos.length = 0
    precioFinal=0
    alertaNeg()
}


pulsar.onclick =function(e){
    e.preventDefault()
    
    precioTotal.innerHTML=(`<p>el total de su compra es: $${localStorage.getItem("total")}</p>`)
    alertaPos()
}

function avisar(){

    swal({
        title:"Se agrego",
        text: "Exitosamente ",
        icon: "success",
        button: true,
        
    });
}
function alertaPos(){


    Toastify({
        text: "COMPRA EXITOSA",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #00b09b, #0e0101)",
        },
        onClick: function(){} // Callback after click
    })
    .showToast();
}

function alertaNeg(){


    Toastify({
        text: "SE VACIO EL CARRITO",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #741b1b, #0e0101)",
        
        },
        onClick: function(){} // Callback after click
    })
    .showToast();
}
