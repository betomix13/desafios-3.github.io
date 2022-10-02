let formulario = document.getElementById("login");
let respuesta = document.getElementById("respuesta");
class Usuario{
    constructor(user, password){
        this.user = user;
        this.password = password;
    }
}

let usuarios = [];
let usuario = new Usuario ("Beto", "123");
let usuario2 = new Usuario ("Emi", "123");
let usuario3 = new Usuario ("Profe", "123");

usuarios.push(usuario,usuario2,usuario3);



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let userLogin = document.getElementById("user").value;
    let passwordLogin = document.getElementById("pass").value;

    for (let user of usuarios) {
        if(user.user == userLogin && user.password == passwordLogin ) {
            alert("Acceso correcto");
            window.location.href = "./tienda.html"
            localStorage.setItem("usuario", user.user);
        }else {
            respuesta.innerHTML= (`<p>Acceso incorrecto. Por favor revisa tu usuario y contraseña. </p>`);
        }
    }
})