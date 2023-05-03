

								Actividad Num°2

1 - Funcion cantidadCaracteresString toma como parametro "string".
ese string lo usa en un promp y la respuesta del usuario se compara (cant/caracteres) metiante lenght > 4. La funcion retorna string unicamente si la misma es mayor que 4.

2- Funcion siNO toma como parametro "pregunta" esa pregunta la usa en un prompt con un toLowerCase y guarda la respuesta de usuario en una variable respuesta que luego la utilizo  para comparar en un while y si el usuario responde Si return y No return

3- Funcion validacionNombreUsuarioBool pide el nombre de usuario ya existente mediante un prompt y con some busca el nombre de usuario. return true o false

3- Funcion validacionContraUsuarioBool pide la contraseña de usuario ya existente mediante un prompt y con some busca la contraseña del usuario. return true o false

						/*********/

linea 32 creo una class objeto (usuarios) con nombre y contraseña. Tiene un metodo llamado bienvenida que muestra usuario y contraseña al cliente.
Despues creo un array misUsuarios VACIO pero seguido de eso creo un usuario de prueba para poder entrar en la pag como un usuario ya existente.

					/*********/
Al comenzar el codigo utilizo la funcion siNO para consultarle al cliente si tiene usuario, la respuesta la guardo en una variable "respuesta"

1- En el caso que diga que "si" utilizo la funcion validacionNombreUsuarioBool y si la respuesta es false con un for y la funcion validacionNombreUsuarioBool le doy tres intentos. En el caso de true corta el for con un break.

Si el usuario existe ("usuarioBool") utilizo la funcion validacionContraUsuarioBool y si la respuesta es false con un for y la funcion validacionContraUsuarioBool le doy tres intentos. En el caso de true corta el for con un break.
Si la contraseña es correcta le da la bienvenida.

2- En el caso de que diga que "no" con la funcion siNO le consulta al cliente si quiere crear una cuenta

Si el cliente quiere crear una cuenta ("respuestaCrearUsuario") - utilizo un do-while y la funcion cantidadCaracteresString / el ciclo corta si el cliente no quiere volver a intentar o en el caso de que el cliente cumpla con la condicion de nombre de usuario 

En el caso de que el nombre de usuario cumpla con la condicion ("nombreUsuario")-utilizo un do-while y la funcion cantidadCaracteresString / el ciclo corta si el cliente no quiere volver a intentar o en el caso de que el cliente cumpla con la condicion  de contraseña usuario

si la contraseña cumple con la condicion("contraUsuario") crea el usuario guardando el nombre de usuario y contraseña en el array misUsuarios y utliza el metodo bienvenida

Por ultimo con un for of muestro los datos de misUsuarios por consola.



						Actividad Num°3

Linea 131 a 134 recupero con un getElementById los precios de cada promocion

linea 136 a 161 utilizo el evento onmousemove para decirle al cliente cuanto descuento se le esta haciendo a dicha promocion (cada vez que el mouse le pase por encima al valor) y utilizo onmouseout para volver a la normalidad la pagina (cuando el mouse no este encima del valor)

el link "zapatillas" del NAV nos dirige a la galeria de zapatillas

En esta pagina creo las funciones:

* recuperarCarrito 
Pide por parametro ("ultimoNumCarro") el numero de productos agregados al carrito guardado en ultimoNumeroCarrito -> (setItem) Si el if ultimoNumCarro es verdadero, entra a otro if donde x parametro con getItem tomo los datos del ultimoCarrito("los productos del ultimo carrito").
En el caso de que el if sea verdadero con getItem tomo nuevamente los datos del ultimoCarrito y los guarda en la var PILA. Seguido utilizo JSON.parse para trasformar los valores de PILA y lo guardo en la var carritoJSON que con Map los transformo nuevamente en productos(objetos) y los vuelvo a agregar a su origen ("carrito (array)") tambien utiliza la funcion setNumUltimoCarrito que pide por parametro un array y recorre ese array para contar la cantidad de iteraciones y retorna la dicha cantidad donde la guarda en una var llamada num y por ultimo la var un es ingresada al parametro de la funcion modificaNumCarrito que pide por parametro un numero que utiliza para modificar el contador del carrito que es tomado con un getElementById("numCarrito")

* agregarCarrito
Pide por parametro el id del producto  y los compara con un find y en el caso de encontrar el producto agrega el producto al array y guarda el array con esa informacion("setItem") tranformando previamente con JSON.stringify ("clave ultimoCarrito"). Dentro tambien incluye la funcion numTotalCarrito que pide por parametro un array y recorre ese array para contar la cantidad de iteraciones y modifica el contador del carrito("contador que esta al lado del carrito en la pagina")

* numTotalCarrito
Pide por parametro un array y recorre ese array para contar la cantidad de iteraciones y modifica el contador del carrito("contador que esta al lado del carrito en la pagina")

*setNumUltimoCarrito 
Pide por parametro un array y recorre ese array para contar la cantidad de iteraciones y retorna la dicha cantidad

*modificaNumCarrito 
Pide por parametro un numero que utiliza para modificar el contador del carrito que es tomado con un getElementById("numCarrito")

Despues de estas funciones creo la clase Producto que tiene nombre, detalle, precio, id

Creo el array PRODUCTOS y dentro creo 4 productos con nombre, detalle, precio, id

creo dos array vacios carritoJSON y carrito

busco el ultimo numero del carrito con getItem con la clave "ultimoNumeroCarrito" y lo agrego a la var NOEXISTE donde la ultilizo para poner en el parametro de la funcion recuperarCarrito

Desestructuro nombre, detalle, precio, id de el array PRODUCTOS

guardo el producto 0 en una var llamada producto1

Utilizo document.getElementById("productoUnoNombre") para tomar el contenedor del nombre producto y lo guardo en producto1Nombre
solicito el nombre del producto (producto1.nombre) y lo guardo en la var nombreproducto1
utilizo la var nombreproducto1 para modificar el nombre del producto mediante producto1Nombre.innerText

Utilizo document.getElementById("productoUnoDetalle") para tomar el contenedor del detalle producto y lo guardo en producto1Detalle
solicito el detalle del producto (producto1.detalle) y lo guardo en la var detalleproducto1
utilizo la var detalleproducto1 para modificar el detalle del producto mediante producto1Detalle.innerText

Utilizo document.getElementById("productoUnoPrecio") para tomar el contenedor del precio producto y lo guardo en var producto1Precio
solicito el precio del producto (producto1.precio) y lo guardo en la var precioproducto1
utilizo la var precioproducto1 para modificar el precio del producto mediante producto1Precio.innerText

Utilizo document.getElementById("productoUnoButton") para tomar el contenedor del botton y lo guardo en producto1Buttom
solicito el id del producto (producto1.id) y lo guardo en la var idproducto1
genero un evento onclick en producto1Buttom para que cuando presione el boton 
agregue al carrito utilizando la funcion agregarCarrito con el parametro idproducto1
utilizo setNumUltimoCarrito con el parametro carrito para retornar la cantidad de productos en el array y lo guarda en la var numUltimoCarrito que luego es utilizada como  valor al guardarla con setItem bajo la clave setItem ultimoNumeroCarrito














