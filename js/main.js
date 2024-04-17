/**
 
La idea es hacer un carrito de compras con un acumulador en el que vaya sumando el dinero segun la cantidad de productos adquiridos. Una vez que haya finalizado la compra se le ofrece al usuario la posibilidad de realizar una competencia de pieda, papel o tijera con la franquicia.
Donde por cada vez que gane obtiene un 10% de descuento en su compra o un 5% en caso de empate (si pierde no varia). Es acumulable y tiene 3 chanches, si gana siemre tendra 30% OFF.

primero tengo que hacer que cargue el carrito con las opciones de venta de productos, a medida que va eligiendo tengo que sumar los productos y debo verificar que agregue valores validos (que no sean negativos), una vez completó la carga del carrito debo tener calculada la suma total. En ese momento aplico el juego del piedra-papel-tijera, para que tambien acumule de a 10 o de a 5, y esa sumatoria la aplique como porcentaje de descuento a la suma total previa. Una vez finalizada imprimo el valor original y le digo que gracias al descuento su nuevo valor a abonar es...

 */



//variables usadas en el ciclo do..while
let eleccion_compra ;
let salir = false;
let acumulador_compra = 0;
let cant_unidades =0;
let participar;

//Variables usadas dentro del ciclo for
const cant_intentos= 3;
let opcionJugador;
let total_descuento = 0; // Inicializo el acumulador o sumador en cero

do{
    eleccion_compra= parseInt (prompt("Bienvenido a nuestra tienda de dulces, por favor ingrese el numero correspondiente segun el producto que desea: \n\n1. Helado \n2. Pochoclos \n3. Chocolates \n4. Para finalizar la compra"));
    switch (eleccion_compra) {
        case 1:
            cant_unidades = parseInt(prompt("Indique la cantidad de unidades que desea, máximo 3 por compra"));
            if (cant_unidades >= 1 && cant_unidades <= 3) {
                acumulador_compra += calculo_compra(3500, cant_unidades);
            } else {
                alert("El número de unidades indicadas no es válido, vuelva a intentarlo.");
            }
            break;
        case 2:
            cant_unidades = parseInt(prompt("Indique la cantidad de unidades que desea, máximo 3 por compra"));
            if (cant_unidades >= 1 && cant_unidades <= 3) {
                acumulador_compra += calculo_compra(1800, cant_unidades);
            } else {
                alert("El número de unidades indicadas no es válido, vuelva a intentarlo.");
            }
            break;
        case 3:
            cant_unidades = parseInt(prompt("Indique la cantidad de unidades que desea, máximo 3 por compra"));
            if (cant_unidades >= 1 && cant_unidades <= 3) {
                acumulador_compra += calculo_compra(2300, cant_unidades);
            } else {
                alert("El número de unidades indicadas no es válido, vuelva a intentarlo.");
            }
            break;
        case 4:
            participar= parseInt (prompt("Su orden ah sido procesada, su valor abonar es: "+ acumulador_compra+ "$.\nPero como estamos de aniversario le invitamos a participar de un juego por descuento en su compra. Desea participar??\n\n1. Sí, soy amante de los descuentos!\n2. No, yo derrocho dinero!"));
            if(participar === 1){
                alert("Preparese para jugar al piedra, papel o tijera. \n·Una victoria ---> 10% de descuento \n·El empate ---> 5% de descuento \n·El descuento es acumulable y tiene 3 intentos." )
                for (let i = 1; i <= cant_intentos; i++) { // los 3 intentos para el descuento 
                    const opcionPC = parseInt((Math.random() * 3) + 1); // Cambiamos a 3 porque hay 3 opciones
                    const opcionJugador = parseInt(prompt("Ingrese su elección:\n\n1. Para piedra\n2. Para papel\n3. Para tijera"));
                
                    if (opcionJugador === opcionPC) {
                        alert("Ambos eligieron la misma opción. Empate. Tenes un 5% OFF.");
                        total_descuento += 5; // Acumulo el descuento
                    } else {
                        switch (opcionPC) {
                            case 1:
                                if (opcionJugador === 2) {
                                    alert("Felicidades, ganaste. Elegiste papel y nosotros elegimos piedra. Tenes un 10% OFF");
                                    total_descuento += 10;
                                } else if (opcionJugador === 3) {
                                    alert("Lástima, perdiste. Elegiste tijera y nosotros piedra");
                                } else {
                                    alert("Ingresaste una opción que no es válida.");
                                }
                                break;
                            case 2:
                                if (opcionJugador === 1) {
                                    alert("Lástima, perdiste. Elegiste piedra y nosotros papel");
                                } else if (opcionJugador === 3) {
                                    alert("Felicidades, ganaste. Elegiste tijera y nosotros papel. Tenes un 10% OFF");
                                    total_descuento += 10;
                                } else {
                                    alert("Ingresaste una opción que no es válida.");
                                }
                                break;
                            case 3:
                                if (opcionJugador === 1) {
                                    alert("Felicidades, ganaste. Elegiste piedra y nosotros tijera. Tenes un 10% OFF");
                                    total_descuento += 10;
                                } else if (opcionJugador === 2) {
                                    alert("Lástima, perdiste. Elegiste papel y la pc eligió tijera");
                                } else {
                                    alert("Ingresaste una opción que no es válida.");
                                }
                                break;
                            default:
                                alert("La pc se volvió loca y sacó una espada (?)");
                                break;
                        }
                    }
                    
                    alert("Le quedan " + (cant_intentos - i) + " de intentos");
                
                    if (i === cant_intentos) {
                        alert("Se acabo el juego, su total de descuento acumulado es: " + total_descuento + "%");
                    }
                }
                monto_total= porcentaje_compra(acumulador_compra,total_descuento);
                alert("Gracias por realizar el juego, ahora si, su total a abonar considerando el valor original y el descuento aplicado es de:\n\n-Precio original: "+ acumulador_compra + "$.\n-Descuento obtenido: "+ total_descuento + "% OFF\n\n-Total a pagar: "+ monto_total);

                salir= true;

            }else if (participar === 2){
                alert("Gracias por elegirnos, el valor a abonar es: "+ acumulador_compra);
                salir= true;
            } else{
                alert("El numero seleccionado no es valido, vuelva a intentarlo.");
            }
            break;
        default:
            alert("El numero seleccionado no es valido, vuelva a intentarlo.")
            break;
    }

}while (!salir);

