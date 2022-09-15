const productos = [
{nombre: "polera", precio: 15000},
{nombre: "pantalon", precio: 18000},
{nombre: "poleron", precio: 20000},
];

let carrito = [];

let seleccion = prompt("Bienvenido\n Desea realizar alguna compra?\n Indique: (si / no)");

while (seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si / no");
    seleccion = prompt("Hola desea comprar algo si / no");
}

if(seleccion == "si"){
  alert("Revise nuestra lista de productos a continuacion");
  let listaProductos = productos.map(
      (producto) => producto.nombre + " " + "$" + producto.precio
   );
    alert(listaProductos.join("\n"));
}  else if (seleccion == "no"){
    alert("Gracias por preferirnos!");
}

while(seleccion != "no"){
    let producto = prompt("Ingresa el producto que deseas:\n polera\n pantalon\n poleron");
    let precio = 0;

    if(producto == "polera" || producto == "pantalon" || producto == "poleron"){
        switch(producto) {
            case "polera":
              precio = 15000;
              break;
            case "pantalon":
              precio = 18000;
              break;
            case "poleron":
              precio = 20000;
              break;
            default:
              break;
        }

    let unidades = parseInt(prompt("Por favor indique la cantidad de unidades que desea llevar"));

    carrito.push({producto, unidades, precio})
    console.log(carrito)

    } else {
        alert("No tenemos el producto ingresado");
    }

    seleccion = prompt("Desea seguir comprando\n Indique si / no");

    while(seleccion === "no") {
        alert("Muchas Gracias por su compra");
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, valor de la compra: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
     break;
    }
}

const total = carrito.reduce((acumulado, productos) => acumulado + productos.precio * productos.unidades, 0)
console.log(`El Valor total de su compra es: ${total}`);