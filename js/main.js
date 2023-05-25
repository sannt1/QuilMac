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

const iPhone = [
    { id: 1, modelo: "iPhone 8 Plus", precio: 200 },
    { id: 2, modelo: "iPhone X", precio: 400 },
    { id: 3, modelo: "iPhone XR", precio: 500 },
    { id: 4, modelo: "iPhone XS", precio: 600 },
    { id: 5, modelo: "iPhone XS Max", precio: 700 },
    { id: 6, modelo: "iPhone 11", precio: 800 },
    { id: 7, modelo: "iPhone 11 Pro", precio: 1000 },
    { id: 8, modelo: "iPhone 11 Pro Max", precio: 1100 },
    { id: 9, modelo: "iPhone SE (2nd generation)", precio: 300 },
    { id: 10, modelo: "iPhone 12", precio: 1200 },
    { id: 11, modelo: "iPhone 12 Mini", precio: 1000 },
    { id: 12, modelo: "iPhone 12 Pro", precio: 1300 },
    { id: 13, modelo: "iPhone 12 Pro Max", precio: 1400 },
    { id: 14, modelo: "iPhone 13", precio: 1500 },
    { id: 15, modelo: "iPhone 13 Mini", precio: 1300 },
    { id: 16, modelo: "iPhone 13 Pro", precio: 1600 },
    { id: 17, modelo: "iPhone 13 Pro Max", precio: 1700 },
    { id: 14, modelo: "iPhone 14", precio: 1800 },
    { id: 15, modelo: "iPhone 14 Plus", precio: 1900 },
    { id: 16, modelo: "iPhone 14 Pro", precio: 2000 },
    { id: 17, modelo: "iPhone 14 Pro Max", precio: 2200 },
];

const iPads = [
    { id: 1, modelo: "iPad (8th generation)", precio: 300 },
    { id: 2, modelo: "iPad Air (4th generation)", precio: 500 },
    { id: 3, modelo: "iPad Pro 11-inch", precio: 800 },
    { id: 4, modelo: "iPad Pro 12.9-inch", precio: 1000 },
    { id: 5, modelo: "iPad Mini (5th generation)", precio: 400 },
    { id: 6, modelo: "iPad (9th generation)", precio: 350 },
    { id: 7, modelo: "iPad Air (5th generation)", precio: 600 },
    { id: 8, modelo: "iPad Pro 11-inch (3rd generation)", precio: 900 },
    { id: 9, modelo: "iPad Pro 12.9-inch (5th generation)", precio: 1200 },
];

const Macs = [
    { id: 1, modelo: "MacBook Air", precio: 1000 },
    { id: 2, modelo: "MacBook Pro (13-inch)", precio: 1500 },
    { id: 3, modelo: "MacBook Pro (16-inch)", precio: 2000 },
    { id: 4, modelo: "iMac", precio: 1200 },
    { id: 5, modelo: "iMac Pro", precio: 5000 },
    { id: 6, modelo: "Mac Pro", precio: 6000 },
    { id: 7, modelo: "Mac mini", precio: 800 },
  ];

  // Función para sumar el precio de los productos en un array dado
function sumarPrecios(el) {
    return el.reduce((total, producto) => total + producto.precio, 0);
  }

  // Función para sumar el precio de los iPhones disponibles
function sumarPreciosIphone() {
    return sumarPrecios(iPhone);
  }
  
  // Función para sumar el precio de los iPads disponibles
  function sumarPreciosIpad() {
    return sumarPrecios(iPads);
  }
  
  // Función para sumar el precio de las Macs disponibles
  function sumarPreciosMac() {
    return sumarPrecios(Macs);
  }

  console.log("Suma de precios de iPhones:", sumarPreciosIphone());
  console.log("Suma de precios de iPads:", sumarPreciosIpad());
  console.log("Suma de precios de Macs:", sumarPreciosMac());
  
// simulacion compra de iPhone
function comprariPhone() {
    var modelo = prompt("Ingrese el modelo de iPhone que desea comprar:");
    var iPhoneSeleccionado = iPhone.find(function (iPhone) {
      return iPhone.modelo.toLowerCase() === modelo.toLowerCase();
    });
    if (iPhoneSeleccionado) {
      alert("El precio del " + iPhoneSeleccionado.modelo + " es $" + iPhoneSeleccionado.precio);
    } else {
      alert("El modelo de iPhone ingresado no está disponible.");
    }
  }
comprariPhone();

// Función para obtener los productos con precio menor a $500
function obtenerBaratos() {
    // Filtrar iPhones con precio menor a $500
    const iPhonesBaratos = iPhone.filter(function (iPhone) {
      return iPhone.precio < 500;
    });
  
    // Filtrar iPads con precio menor a $500
    const iPadsBaratos = iPads.filter(function (iPad) {
      return iPad.precio < 500;
    });
  
    // Filtrar Macs con precio menor a $500
    const macsBaratos = Macs.filter(function (Macs) {
      return Macs.precio < 500;
    });
  
    // Devolver un objeto con los productos filtrados
    return {
      iPhones: iPhonesBaratos,
      iPads: iPadsBaratos,
      Macs: macsBaratos,
    };
  }
  
  // Llamar a la función y mostrar los productos con precio menor a $500
  const productosBaratos = obtenerBaratos();
  
  console.log("iPhones con precio menor a $500:", productosBaratos.iPhones);
  console.log("iPads con precio menor a $500:", productosBaratos.iPads);
  console.log("Macs con precio menor a $500:", productosBaratos.Macs);
  
