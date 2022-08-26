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

const productos = []

//defino dom

let titulo1 =document.getElementById("titulo1")
titulo1.innerHTML = "░▒▓ BIENVENIDO A BTX COMPUTACION ▓▒░"

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
        productos.push(producto1)
        precioFinal += producto1.precio 
        mostrarItems(producto1)
    }else if(opc == "prod2"){
        const producto2  = new Producto ("Dell", "r5",140000)
        productos.push(producto2)
        precioFinal += producto2.precio 
        mostrarItems(producto2)
    }else {
        const producto3  = new Producto ("Lenovo", "r3",100000)
        productos.push(producto3)
        precioFinal += producto3.precio 
        mostrarItems(producto3)
    }
}

//defino funciones
function mostrarItems(producto){
    let listaPrev = document.getElementById("listaPrev")
    let currentProd = document.createElement("p")

    currentProd.innerHTML=(`${producto.marca} ${producto.procesador} => ${producto.precio}`)
    listaPrev.appendChild(currentProd)
}

let pulsar = document.getElementById("verProd")
pulsar.onclick =function(e){
    e.preventDefault()
    let totality = document.getElementById("totality")
    totality.innerHTML=(`<p>el total de su compra es ${precioFinal}</p>`)
}