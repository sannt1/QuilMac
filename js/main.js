let usuario = "Santiago"
let password = "prueba"
let ingreso = false

for (let i = 2; i >=0; i--) {
    let ingresoUsuario = prompt("Ingresa tu usuario. Tienes " + (i + 1) + " intentos"
    );
    let ingresoPassword = prompt("Ingresa tu contraseña. Tienes " + (i + 1) + " intentos"
    );    
    if (ingresoUsuario === usuario && ingresoPassword === password) {
        alert("Hola nuevamente " + usuario + "!")
        ingreso = true;
        break;
    } else {
        alert("Credenciales incorrectas");
    }
}

function stock() {
     alert("Actualmente tenemos estos equipos disponibles");
}
function verificarStock(producto) {
    switch (producto) {
      case "iPhone":
        alert("11, 11 Pro, 12, 12 Pro, 13, 13 Pro Max, 14 PLUS");
        break;
      case "Mac":
        alert("M1, Air, M2 PRO");
        break;
      case "iPad":
        alert("Lamentablemente no tenemos stock de iPad por el momento");
        break;
      default:
        alert("No se reconoce el producto");
    }
  }
  

if (ingreso){
    let opcion = prompt(
        "¿Cual va a ser tu nueva adquisición?: \n1- iPhone. \n2- Macbook. \n3- iPad. \nPresioná X para salir."
    );
    while (opcion != "x") {
        switch (opcion) {
            case "1":
                stock();
                verificarStock("iPhone");
                break;
            case "2":
                stock();
                verificarStock("Mac");
                break;            
            case "3":
                verificarStock("iPad")
                break;
                
            default:
                alert("Opción no valida");
                break;
        }
        opcion = prompt(
            "¿Cual va a ser tu nueva adquisición?: \n1- iPhone. \n2- Macbook. \n3- iPad. \nPresioná X para salir."
        );
    }
} else {
    alert("¡Gracias por elegirnos!")
}