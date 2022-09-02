//creo el constructor como referencia para el producto 
class Producto{
    constructor(marca,procesador,precio){
        this.marca=marca;
        this.procesador=procesador;
        this.precio=precio;
    }
        
}

//defino variables

let total = 0
let continuar = "S"
let precioFinal = 0
guardarLocalStorage("total",0)
const productos = []

//defino dom

let titulo1 =document.getElementById("titulo1")
titulo1.innerHTML = "░▒▓ BIENVENIDO A BTX COMPUTACION ▓▒░"

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
        const producto1  = new Producto ("Asus", "r7",180000)
        precioFinal += producto1.precio 
        guardarLocalStorage("total", precioFinal)
        productos.push(producto1)
        guardarLocalStorage("listaProd",JSON.stringify(productos))
        mostrarItemsLocalStorage()

    }else if(opc == "prod2"){
        const producto2  = new Producto ("Dell", "r5",140000)
        precioFinal += producto2.precio 
        guardarLocalStorage("total",precioFinal)
        productos.push(producto2)
        guardarLocalStorage("listaProd",JSON.stringify(productos))
        mostrarItemsLocalStorage()

    }else {
        const producto3  = new Producto ("Lenovo", "r3",100000)
        precioFinal += producto3.precio 
        guardarLocalStorage("total",precioFinal)
        productos.push(producto3)
        guardarLocalStorage("listaProd",JSON.stringify(productos))
        mostrarItemsLocalStorage()
    }
}

//defino funciones

function guardarLocalStorage(key, value) {
    return localStorage.setItem(key, value)
}


function mostrarItemsLocalStorage(){
    //let listaPrev = document.getElementById("listaPrev")
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
    
}


pulsar.onclick =function(e){
    e.preventDefault()
    
    precioTotal.innerHTML=(`<p>el total de su compra es ${localStorage.getItem("total")}</p>`)
}