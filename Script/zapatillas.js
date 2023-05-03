
function recuperarCarrito(ultimoNumCarro){
	if (ultimoNumCarro) {
 	if (sessionStorage.getItem("ultimoCarrito")) {
  let pila = sessionStorage.getItem("ultimoCarrito");
  const carritoJSON = JSON.parse(pila);
  carrito = carritoJSON.map(
    (element) => new Producto(Producto.nombre, Producto.detalle, Producto.precio, Producto.id)
   );
  }
	let num = setNumUltimoCarrito(carrito);
 	modificaNumCarrito(num);
	}
}

const agregarCarrito = (prodId) => {
let item = PRODUCTOS.find((producto) => producto.id === prodId);
	carrito.push(item);
	numTotalCarrito(carrito)
	sessionStorage.setItem("ultimoCarrito", JSON.stringify(carrito));
}

function numTotalCarrito(array){
	let totalprop = 0;
	let totalcarro = document.getElementById("numCarrito")
	for (let i = 0 ; i < array.length; i++) {
		totalprop++
	}
	totalcarro.innerText = totalprop;
}

function setNumUltimoCarrito(array){
	let totalprop = 0;
	for (let i = 0 ; i < array.length; i++) {
		totalprop++
	}
	return totalprop
}

function modificaNumCarrito(num){
	let totalcarro = document.getElementById("numCarrito")
	totalcarro.innerText = num ;
}

class Producto {
  constructor(nombre, detalle, precio, id) {
  	this.nombre = nombre;
    this.detalle = detalle;
    this.precio = parseFloat(precio);
    this.id = id; 
  }
 }
const PRODUCTOS = [
					new Producto("zapatillas new balance", "Capellada sintética para mayor estilo y comodidad " , 40000,  1),
 					new Producto("zapatillas fila", "Capellada sintética para mayor estilo y comodidad ",  70000,  2),
 					new Producto("zapatillas nike" ,"Capellada sintética para mayor estilo y comodidad ",  35000,  3),
 					new Producto("zapatillas reebook" ,"Capellada sintética para mayor estilo y comodidad ", 45000, 4),
 					];

let carritoJSON = [];
let carrito = [];


let NOEXISTE = sessionStorage.getItem("ultimoNumeroCarrito");
recuperarCarrito(NOEXISTE);


let { nombre, detalle, precio, id } = PRODUCTOS;

let producto1 = PRODUCTOS[0];

let producto1Nombre = document.getElementById("productoUnoNombre");
let nombreproducto1 = producto1.nombre;
producto1Nombre.innerText = nombreproducto1;
let producto1Detalle = document.getElementById("productoUnoDetalle");
let detalleproducto1 = producto1.detalle;
producto1Detalle.innerText = detalleproducto1;
let producto1Precio = document.getElementById("productoUnoPrecio");
let precioproducto1 = producto1.precio;
producto1Precio.innerText = precioproducto1;
let producto1Buttom = document.getElementById("productoUnoButton");
let idproducto1 = producto1.id;
producto1Buttom.onclick = () =>{	
	agregarCarrito(idproducto1)
	let numUltimoCarrito = setNumUltimoCarrito(carrito);
	sessionStorage.setItem("ultimoNumeroCarrito", JSON.stringify(numUltimoCarrito));
}

let producto2 = PRODUCTOS[1];

let producto2Nombre = document.getElementById("productoDosNombre");
let nombreproducto2 = producto2.nombre;
producto2Nombre.innerText = nombreproducto2;
let producto2Detalle = document.getElementById("productoDosDetalle");
let detalleproducto2 = producto2.detalle;
producto2Detalle.innerText = detalleproducto2;
let producto2Precio = document.getElementById("productoDosPrecio");
let precioproducto2 = producto2.precio;
producto2Precio.innerText = precioproducto2;
let producto2Buttom = document.getElementById("productoDosButton");
let idproducto2 = producto2.id;
producto2Buttom.onclick = () =>{
	agregarCarrito(idproducto2)
	let numUltimoCarrito = setNumUltimoCarrito(carrito);
	sessionStorage.setItem("ultimoNumeroCarrito", JSON.stringify(numUltimoCarrito));
}

let producto3 = PRODUCTOS[2];

let producto3Nombre = document.getElementById("productoTresNombre");
let nombreproducto3 = producto3.nombre;
producto3Nombre.innerText = nombreproducto3;
let producto3Detalle = document.getElementById("productoTresDetalle");
let detalleproducto3 = producto3.detalle;
producto3Detalle.innerText = detalleproducto3;
let producto3Precio = document.getElementById("productoTresPrecio");
let precioproducto3 = producto3.precio;
producto3Precio.innerText = precioproducto3;
let producto3Buttom = document.getElementById("productoTresButton");
let idproducto3 = producto3.id;
producto3Buttom.onclick = () =>{
	agregarCarrito(idproducto3)
	let numUltimoCarrito = setNumUltimoCarrito(carrito);
	sessionStorage.setItem("ultimoNumeroCarrito", JSON.stringify(numUltimoCarrito));
}

let producto4 = PRODUCTOS[3];

let producto4Nombre = document.getElementById("productoCuatroNombre");
let nombreproducto4 = producto4.nombre;
producto4Nombre.innerText = nombreproducto4;
let producto4Detalle = document.getElementById("productoCuatroDetalle");
let detalleproducto4 = producto4.detalle;
producto4Detalle.innerText = detalleproducto4;
let producto4Precio = document.getElementById("productoCuatroPrecio");
let precioproducto4 = producto4.precio;
producto4Precio.innerText = precioproducto4;
let producto4Buttom = document.getElementById("productoCuatroButton");
let idproducto4 = producto4.id;
producto4Buttom.onclick = () =>{
	agregarCarrito(idproducto4)
	let numUltimoCarrito = setNumUltimoCarrito(carrito);
	sessionStorage.setItem("ultimoNumeroCarrito", JSON.stringify(numUltimoCarrito));
}

















 


