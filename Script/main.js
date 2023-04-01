function resta(num1,num2){
	return num1 - num2 ;
}
function suma(num1,num2){
	return num1 + num2 ;
}
function cuponDescuento15(precio){
		let descuento ;
		descuento = (precio * 15)/100;
		return precio - descuento;
}

function validacion(respuestaUsuario) {
 
  if (respuestaUsuario.toUpperCase() === "SI") {
      return  1;
  }
  else if (respuestaUsuario.toUpperCase() === "NO") {
      return 2 ;
  }
      return 3; 
}


//*************************************************************************************************************************//
//*************************************************************************************************************************//




let respuesta = 0;
respuesta =   validacion(prompt("Bienvenido a King-Lion, ¿usted tiene un usuario?")) ;
alert(respuesta);



if (respuesta >= 3) {

      alert("ERROR");

       for ( i = 1; i <= 3; i++) {

                    respuesta =   validacion(prompt("Bienvenido a King-Lion, ¿usted tiene un usuario?")) ;


             if (respuesta >= 3) {

                 alert("ERROR fatal num " + i );

                  if (i === 3) {
                                alert("Se te acabaron los intentos");
                              }
                              
             }
             else if( respuesta === 1 ){

                break;

             }
             else if( respuesta === 2 ){

               
                break;

             }
      }
}

if (respuesta === 1) {

    let loginUsuario = 0 ;
    loginUsuario = prompt("Ingrese su usuario");

}else if( respuesta === 2 ){

               let crearUsuario = 0 ;
                crearUsuario = prompt("Invente su usuario");

             }















