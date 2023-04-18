

    function validacion(respuestaUsuario) {
     
      if (respuestaUsuario.toUpperCase() === "SI") {
          return  1;
      }
      else if (respuestaUsuario.toUpperCase() === "NO") {
          return 2 ;
      }
          return 3; 
    }

    function cantidadCaracteres(variable){

            return variable.length > 4;

    }

     function porCadaUno(array, funcion){

        for(const elemento of array){
          
          funcion(elemento);
      }

    }


    //*************************************************************************************************************************//
    //*************************************************************************************************************************//

    class ListadoZapatillas {
      constructor(nombre, precio, genero) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.genero = genero.toUpperCase();
        
      }

     
    }
    let misProductos = [
      
                  {nombre: "Zapatillas Air Max" , precio: 50000.20 },
                  {nombre: "Zapatillas Diadora" , precio: 25000.99 },
                  {nombre: "Zapatillas reebok" , precio: 45000.50 }
    ];






    //*************************************************************************************************************************//
    //*************************************************************************************************************************//

    const PRODUCTOSOFERTA = ["Zapatillas Penalty $10000", "Zapatillas Jaguar $ 5000", "Zapatillas NIKE $20000"];

    class Usuarios {
      constructor(nombre, contra){
        this.nombre = nombre.toUpperCase();
        this.contra = contra;
          
      }
      hablar(){
         console.log("Su nombre de usuario es: " + this.nombre + " / Su contraseña es: " + this.contra);
      }
    }
     const misUsuarios = [];

     const testUsuarioNombre = "CHAMAN";
     const testUsuarioContra = 1234;
     
     const unUsuario = new Usuarios(testUsuarioNombre, testUsuarioContra);
     misUsuarios.push(unUsuario);



    //*************************************************************************************************************************//
    //*************************************************************************************************************************//

    let respuesta = 0;
    respuesta =   validacion(prompt("Bienvenido a King-Lion, ¿usted tiene un usuario?")) ;



    if (respuesta >= 3) {

          console.log("ERROR");
            let i=1;
           for ( i ; i <= 3; i++) {

                        respuesta =   validacion(prompt("Bienvenido a King-Lion, ¿usted tiene un usuario?")) ;


                 if (respuesta >= 3) {
                    console.log("Respuesta incorrecta, responder SI o NO");
                     console.log("ERROR NUMERO " + i );

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


    /********************************************************************************************************/
    /*******************************************************************************************************/

     let loginUsuario;
     
     let respuestaCrearUsuario;
     let crearUsuario;

    if (respuesta === 1) {

         let loginUsuario = prompt("Ingrese su usuario");
         let UsuarioExiste;
         UsuarioExiste = misUsuarios.some(
           (unUsuario) => unUsuario.nombre === loginUsuario.toUpperCase()
          );

       
          if (!UsuarioExiste) {

          console.log("ERROR");
          let i=1;
           for ( i ; i <= 3; i++) {

                       let loginUsuario = prompt("Ingrese su usuario");

                          UsuarioExiste = misUsuarios.some(
                          (unUsuario) => unUsuario.nombre === loginUsuario.toUpperCase());


                 if (!UsuarioExiste) {
                    alert("Nombre de Usuario incorrecto");
                     console.log("ERROR NUMERO " + i );

                      if (i === 3) {
                                    alert("Se te acabaron los intentos");
                                  }
                } else if( UsuarioExiste ){

                    break;

                 }
            }
          }

          let contraValida
          let contraUsuario = true;

          if (UsuarioExiste) {

                    let contraValida = prompt("ingrese su contraseña");

                    let contraUsuario = misUsuarios.some(
                    (unUsuario) => unUsuario.contra ===  parseInt(contraValida) );

                   if (contraUsuario) {
                        alert("bienvenido a King-Lion");
                       }

              if (!contraUsuario) {

                      console.log("ERROR");
                      let i = 1;
                  for ( i ; i <= 3; i++) {

                       let contraValida = prompt("ingrese su contraseña");

                       let contraUsuario = misUsuarios.some(
                        (unUsuario) => unUsuario.contra ===  parseInt(contraValida) );

                       if (contraUsuario) {
                        alert("bienvenido a King-Lion");
                        break;

                    }else if (!contraUsuario) {
                          alert(" contraseña incorrecta");
                         console.log("ERROR NUMERO " + i );
                    }if (i === 3) {
                                    alert("Se te acabaron los intentos");
                                  }
            }
          }
        }

        }else if( respuesta === 2 ){
                   
                   let test
                   let respuestaCrearUsuario = 0;
                   respuestaCrearUsuario  =   validacion(prompt("¿Quiere crear un Usuario ahora?")) ;

             
                 if( respuestaCrearUsuario === 1 ){           

                        let crearUsuario = prompt("Ingrese el nombre de usuario");
                         let test = cantidadCaracteres(crearUsuario);
                         console.log(test);


                        if(!test){

                            alert("El nombre de usuario debe tener mas de 4 digitos");

                            let i = 1;
                            for ( i  ; i <= 3; i++) {

                              
                              crearUsuario = prompt("Ingrese el nombre de usuario");
                              test = cantidadCaracteres(crearUsuario);


                              if (test){

                                   alert("bienvenido a king-lion " + crearUsuario); 
                                   crearPassword = prompt("ingrese su contraseña..(La contraseña tiene que tener mas de 4 digitos)");
                                  let testPasword = cantidadCaracteres(crearPassword);

                                  if(!testPasword){ 

                            let i = 1;
                             let crearPassword = 0;

                            alert("Respuesta incorrecta, la contraseña debe tener por lo menos 5 caracteres");
                            console.log("ERROR NUMERO " + i );

                            for ( i = 1; i <= 3; i++) {

                              
                              let crearPassword = prompt("ingrese su contraseña..(La contraseña tiene que tener mas de 4 digitos)");
                              let testPasword = cantidadCaracteres(crearPassword);


                              if (testPasword){

                                 const unUsuario = new Usuarios(crearUsuario, crearPassword);
                                  misUsuarios.push(unUsuario);
                                  unUsuario.hablar();
                                  break;

                              }else if (i === 3) {
                              
                                            alert("Se te acabaron los intentos");
                                            break;
                           }
                          } 
                       }else{

                            const unUsuario = new Usuarios(crearUsuario, crearPassword);
                            misUsuarios.push(unUsuario);
                            unUsuario.hablar();
                          } 
                                  break;

                              }
                        }

                      }else{

                         alert("Bienvenido a king-lion " + crearUsuario); 
                         crearPassword = prompt("ingrese su contraseña..(La contraseña tiene que tener mas de 4 digitos)"); /* aca no*/
                         let testPasword = cantidadCaracteres(crearPassword);

                         if(!testPasword){ 

                            let i = 1;
                             let crearPassword = 0;
     
                            alert("Respuesta incorrecta, La contraseña debe tener por lo menos 5 caracteres"); 
                            console.log("ERROR NUMERO " + i );

                            for ( i = 1; i <= 3; i++) {

                              
                              let crearPassword = prompt("ingrese su contraseña..(La contraseña tiene que tener mas de 4 digitos)");
                              let testPasword = cantidadCaracteres(crearPassword);


                              if (testPasword){

                                 const unUsuario = new Usuarios(crearUsuario, crearPassword);
                                 misUsuarios.push(unUsuario);
                                 unUsuario.hablar();
                                  break;

                              }else if (i === 3) {
                              
                                            alert("Se te acabaron los intentos");
                                            break;
                           }
                          } 
                       }else{

                            const unUsuario = new Usuarios(crearUsuario, crearPassword);
                            misUsuarios.push(unUsuario);
                            unUsuario.hablar();

                          } 
                      }
                    }  
                  }       
                     
                     
      




      let i = 1 ;

    for(const unUsuario of misUsuarios){
        
        console.log("El nombre de Usuario numero " + i + " es: " + unUsuario.nombre);
        console.log("La contraseña del Usuario numero " + i + " es: " + unUsuario.contra );
        i++; 
    }

  /*    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  */


  respuesta =   validacion(prompt("Quiere ver los productos de oferta?")) ;

  if (respuesta >= 3) {

        console.log("ERROR");

         for ( i = 1; i <= 3; i++) {

                      respuesta =   validacion(prompt("Quiere ver los productos de oferta?")) ;


               if (respuesta >= 3) {
                  console.log("Respuesta incorrecta, responder SI o NO");
                   console.log("ERROR NUMERO " + i );

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

   for(const unProducto of PRODUCTOSOFERTA){
        
        console.log(PRODUCTOSOFERTA.join("; "));
    }

  }

  respuesta = validacion(prompt("Quiere ver los ultimos lanzamientos?")) ;

  if (respuesta >= 3) {

        console.log("ERROR");

         for ( i = 1; i <= 3; i++) {

                      respuesta =   validacion(prompt("Quiere ver los ultimos lanzamientos?")) ;


               if (respuesta >= 3) {
                  console.log("Respuesta incorrecta, responder SI o NO");
                   console.log("ERROR NUMERO " + i );

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

   porCadaUno(misProductos,console.log);


  }






     
    


          
        




/********************************************************************************************************/
/*******************************************************************************************************/




/**

class ListadoZapatillas {
  constructor(nombre, precio, genero) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.genero = genero.toUpperCase();
    this.vendido = false;


  }
}

let misProductos = [];

let respuestaCargaProducto = "SI";

do {
  let nombre = prompt("Ingrese el nombre del producto");
  let precio = prompt("Ingrese el precio del producto");
  let genero = prompt("Ingrese el genero del producto");
  let unProducto = new ListadoZapatillas(nombre, precio, genero);
  misProductos.push(unProducto);
  console.log("--> La cantidad de productos en mí lista de Zapatillas, es de ", misProductos.length);
  respuestaCargaProducto = prompt("¿Quieres seguir añadiendo más productos? SI/NO");
} while (respuestaCargaProducto.toUpperCase() !== "NO");

//agregar validacion de error de respuesta

console.log("--> Esta es la lista de todos los productos que cargué", misProductos);

**/