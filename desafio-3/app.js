class Producto{
    constructor(nombre,marca,procesador,ram,precio){
        this.nombre=nombre;
        this.marca=marca;
        this.procesador=procesador;
        this.ram=ram;
        this.precio=precio;
    }
        
}


let total = 0
let continuar = "S"
let precioFin = 0
let totalFin = 0
const productos = []


alert(" ░░░▒▓ BIENVENIDO A BTX COMPUTACION ▓▒░░░")

const menu = () => {
    let opcion = Number(prompt("Seleccione sus productos: \n1- Notebook asus r7 16gb -> $180.000\n2- Notebook dell r5 8gb ->$140.000 \n3- Notebook lenovo r3 4gb ->$100.000"))

    return opcion
}


const opciones = (opc) => {
    switch (opc) {
        case 1:
            alert("Se agrego: notebook asus r7 16gb")

            //const obj1 = { nombre: "notebook asus r7 16gb", precio: 180000 }
            const obj1 = new Producto("notebook","asus", "r7", "16gb",18000)

            productos.push(obj1)
            break;

        case 2:
            alert("Se agrego: notebook dell r5 8gb")

            //const obj2 = { nombre: "notebook dell r5 8gb", precio: 140000 }
            const obj2 = new Producto("Notebook","Dell", "R5", "8gb",140000)
            productos.push(obj2)
            break;
            case 3:
                alert("Se agrego: notebook lenovo r3 4gb")
                
                //const obj3 = { nombre: "notebook lenovo r3 4gb", precio: 100000 }
            const obj3 = new Producto("Notebook","Lenovo", "R3", "4gb",100000)
            productos.push(obj3)
            break;

        default:
            alert("Usted no ha seleccionado una opcion valida")

            break;
    }

}

const precioTotal = () => {
    for (const prod of productos) {
        total += prod.precio
    }
    return total
}
const verProductos = () => {
    document.write("Los productos que usted va comprar son:")
    productos.forEach(element => {
        document.write(`<br>La ${element.nombre} ${element.marca}--->$  ${element.precio}`)
    });
}
do {
    let rta = menu()
    opciones(rta)
    if (rta < 6 && rta > 0) {

        continuar = prompt("Desea agregar otro producto S/N")
        if (continuar == "N" || continuar == "n") {
            
            let error = true
                while (error) {
                    pago = Number(prompt("Usted abonara en\n1-Efectivo\n2-Tarjeta de credito"))

                    if (pago == 1) {

                        verProductos()
                        document.write("<br>" + "♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦")
                        document.write(`<br> El total de su compra es de : ${precioTotal()}`)
                        break
                    } else if (pago == 2) {
                        let cuotas = Number(prompt("ingrese el numero de cuotas"))
                        precioFin = precioTotal();
                        totalFin = (precioFin / cuotas) * 1.30;
                        verProductos();
                        document.write("<br>" + "♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦")
                        document.write(`<br> usted tendra que abonar ${cuotas} cuotas con un valor de ${totalFin}`)
                        break
                    } else {
                        alert("Opcion no valida, vuelva a intentar")
                        

                    }
                }
        }


    } else if (continuar == "S" || continuar == "s") {
        continue
    } else {
        alert("Opcion no valida, vuelva a intentar")
        continuar = "S"
    }


} while (continuar == "S" || continuar == "s");