    function cantidadCaracteresString(string){
            string = prompt(string)
            if(string.length > 4){
              return string;
            }
    }

    function siNO(pregunta){
      let respuesta = prompt(pregunta).toLowerCase();
      while(respuesta != 'si' && respuesta != 'no') {
      respuesta = prompt("Respuesta incorrecta, responder Si o No").toLowerCase();
      }
      return respuesta;
    }

    function validacionNombreUsuarioBool(){
         let loginUsuario = prompt("Ingrese su nombre de usuario");
         let UsuarioBool = misUsuarios.some(
           (unUsuario) => unUsuario.nombre === loginUsuario.toUpperCase()
          );
         return UsuarioBool;
    }

     function validacionContraUsuarioBool(){
         let contraValida = prompt("ingrese su contraseña");
         let contraBool = misUsuarios.some((unUsuario) => unUsuario.contra ===  parseInt(contraValida));
         return contraBool;
     }

     function cargaUsuario(nombreUsuario,contraUsuario){
      const unUsuario = new Usuarios(nombreUsuario, contraUsuario);
                                 misUsuarios.push(unUsuario);
     }
   
    //*************************************************************************************************************************//
    
    class Usuarios {
      constructor(nombre, contra){
        this.nombre = nombre.toUpperCase();
        this.contra = contra;
        
      }
      bienvenida(nombre,contra){
         alert("¡Bienvenido a King Lion! Tu nombre de usuario es: " + this.nombre + " / Tu contraseña es: " + this.contra);
      }
    }


     const misUsuarios = [];
     const testUsuarioNombre = "CHAMAN";  
     const testUsuarioContra = 12345;
     const unUsuario = new Usuarios(testUsuarioNombre, testUsuarioContra); 
     misUsuarios.push(unUsuario);                                                     // Usuario y contraseña para iniciar sesión.

    //*************************************************************************************************************************//

    

    let respuesta = siNO("¿Bienvenido usted tiene usuario?");
    if (respuesta === "si"){
        let usuarioBool = validacionNombreUsuarioBool();
        if (!usuarioBool) {
                   for ( let i = 1 ; i <= 3; i++) {
                        usuarioBool = validacionNombreUsuarioBool();
                      if (!usuarioBool) {
                                    i === 3 && alert("Se te acabaron los intentos");
                       } else if( usuarioBool ){
                                               break;
                       }
                    }
        }  
        
        if (usuarioBool) {
                    let contraBool = validacionContraUsuarioBool();
          if (!contraBool) {
                 for ( let i = 1 ; i <= 3; i++) {
                      contraBool = validacionContraUsuarioBool();
                    if (!contraBool) {
                                    i === 3 && alert("Se te acabaron los intentos");
                    } else if( contraBool ){
                                            break;
                    }
                 }
          }
          if(contraBool){
                                            alert("Bienvenido");
                        }
        }         
              
      }else if (respuesta === "no"){
                let respuestaCrearUsuario  = siNO("¿Quiere crear un Usuario ahora?");
                if (respuestaCrearUsuario === "si"){           
                          let nombreUsuario;
                          let reintentar

                        do{
                           nombreUsuario = cantidadCaracteresString("Ingrese nombre de Usuario");
                           if(nombreUsuario == null){
                            alert("Respuesta incorrecta, el nombre de usuario tiene que tener al menos 5 caracteres");
                            reintentar = siNO("Quiere volver a intentarlo");
                           }
                        }while(nombreUsuario == null && reintentar  === "si")
                         
                        if(nombreUsuario != null){
                          let contraUsuario;
                          let reintentar;

                        do{
                           contraUsuario = cantidadCaracteresString("Ingrese la contraseña");
                           if(contraUsuario == null){
                            alert("Respuesta incorrecta, la contraseña tiene que tener al menos 5 caracteres");
                            reintentar = siNO("Quiere volver a intentarlo");
                           }
                        }while(contraUsuario == null && reintentar  === "si")
                                contraUsuario != null && cargaUsuario(nombreUsuario, contraUsuario);
                               contraUsuario != null && alert("Bienvenido a King Lion");
                       }
                    }  
                  }       

    let i =1 ;
    for(const unUsuario of misUsuarios){
        console.log("El nombre de Usuario numero " + i + " es: " + unUsuario.nombre);
        console.log("La contraseña del Usuario numero " + i + " es: " + unUsuario.contra );
        i++;
    }

    

   
  const PROMOBICI= document.getElementById("promoBici");
  const promoHockey= document.getElementById("promoHockey");
  const promoYoga= document.getElementById("promoYoga");
  const promoBotines= document.getElementById("promoBotines");
  
  PROMOBICI.onmousemove = () =>{
         PROMOBICI.innerText = "50 % OFF";
  }
  PROMOBICI.onmouseout = () =>{
         PROMOBICI.innerText = "Desde $799";
  }
   promoHockey.onmousemove = () =>{
         promoHockey.innerText = "75 % OFF";
  }
  promoHockey.onmouseout = () =>{
         promoHockey.innerText = "Desde $999";
  }

  promoYoga.onmousemove = () =>{
         promoYoga.innerText = "45 % OFF";
  }
  promoYoga.onmouseout = () =>{
         promoYoga.innerText = "Desde $499";
  }

  promoBotines.onmousemove = () =>{
         promoBotines.innerText = "35 % OFF";
  }
  promoBotines.onmouseout = () =>{
         promoBotines.innerText ="Desde $20999";
  }














  