

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













