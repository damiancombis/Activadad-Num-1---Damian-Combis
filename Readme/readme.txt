Actividad Num°1

En este proyecto intento replicar la pagina de Dexter (indumentaria).
Elegi la indumentaria porque en algun momento me gustaria trabajar haciendo este tipo de paginas.

La funcion validacion que lo que hace es tomar la respuesta de un usuario y devolver "1" para "Si" "2" para "no" y "3" para cualquier otra cosa que no sea "SI" o "NO".

La funcion validacion la utilizo dentro de un FOR para darle 3 oportunidades al cliente de introducir bien la respuesta
con un alert que le avisa cuantos intentos le van quedando.
tambien podria poner un alert que le avise que tiene que responder SI O NO. 

Para finalizar si la respuesta es SI hace una cosa y si la respuesta es NO hace otra.

Actividad Num°2

En esta actividad utilize las respuestas de la actividad anterior.

En el caso de que respondiera * 1 ("SI") * Le pide al cliente que ingrese su usuario (valido el nombre de usuario con some) en el caso de escribir mal su nombre de usuario se lo vuelve a pedir(tiene 3 intentos) pero si el nombre de usuario esta bien le pide la contraseña (valido la contraseña de usuario con some)  en el caso de escribir mal su contraseña se lo vuelve a pedir(tiene 3 intentos). en todo caso de ser correcto le da la bienvenida o lo dirige a la pagina.

En el caso de que respondiera * 2 ("NO") * le consulta al cliente si quiere crear un usuario.

Si el cliente responde * ("SI") * le pide que ingrese el nombre de usuario, ese nombre de usuario es validado con la funcion cantidadCaracteres(esta funcion toma una variable y utiliza el metodo length para comparar tiene mas de 4 caracteres) el resultado de esa comparacion TRUE or FALSE se guarda dentro de la varible TEST

linea 218 - Si TEST es * FALSE * le vuelve a pedir que ingrese su nombre de usuario indicando anteriormente al cliente que debe tener mas de 4 digitos dandole con un ciclo for 3 intentos. En el caso de ingresar bien el usuario, le pide la contraseña y utilizo la variable TESTPASSWORD para la respuesta de CANTIDADCARACTERES (usando el mismo metodo de validacion que use para validar el nombre de usuario). En el caso de que TESTPASSWORD sea TRUE carga el usuario al array de objetos 

linea 275 - Si TEST es * TRUE * le pide la contraseña y utilizo la variable TESTPASSWORD para la respuesta de CANTIDADCARACTERES (usando el mismo metodo de validacion que use para validar el nombre de usuario). En el caso de que TESTPASSWORD sea TRUE carga el usuario al array de objetos 

linea 328 utilizo un for of para mostrar los usuarios ya creados y tambien el creado por el cliente

linea 338 le consulto al cliente si quiere ver los productos de oferta. utilizo la funcion validacion para su respuesta en el caso  de responder si le muestro las ofertas con un for of y separo los productos con un join para que se pueda distinguir con mas claridad

linea 381 le consulto al cliente si quiere ver los ultimos lanzamientos. utilizo la funcion validacion para su respuesta en el caso  de responder si le muestro los productos con la funcion porCadaUno que toma el array y lo muestra con el console.log




