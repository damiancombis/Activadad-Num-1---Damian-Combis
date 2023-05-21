

													Funciones:

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

*cargarTodosProductos 
Carga productos del array Productos a travez del DOM

*resultadoFilter
recibe array con productos filtrados.. Borra los productos cargados en la pag y carga los productos filtrados recibido en el array(parametro)




















