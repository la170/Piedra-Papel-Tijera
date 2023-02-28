// Opciones
const intentos = +prompt('¿Cuantas veces desea jugar?')
if (intentos === 0){ /* Colocamos un condional para que el usuario no ingrese 0 y pueda jugar */
    alert('Ingrese un numero mayor a 0 para jugar')
}
/* Llamamos los id de los botones piedra paple tijera y resultado, pero como los botones estan desabilitados los habilito con: .disabled = false */
const opt_piedra = document.getElementById("piedra");
const habilitado = document.getElementById("piedra").disabled = false;
const opt_papel = document.getElementById("papel");
const habilitado1 = document.getElementById("papel").disabled = false;
const opt_tijera = document.getElementById("tijera");
const habilitado2 = document.getElementById("tijera").disabled = false;
const resultado = document.getElementById("resultado");
const resultado1 = document.getElementById("resultado").disabled = false;

// Llamamos el id de las imagenes de Jugadores
const img_opt_player1 = document.getElementById("player1");
const img_opt_player2 = document.getElementById("player2");
//Recuento en cadena
const ptos_player1 = document.getElementById("player1").innerText;
const ptos_player2 = document.getElementById("player2").innerText;
// inicializamos las variables 
let select_player1;
let select_player2;
let vs;

// Player 1
let cont = 0
resultado.onclick = function(){/* Cuando se de un click en el boton resultado ejecuta la funcion*/
    if (cont === intentos){/* si el contador el igual a los intentos entonses llamo a la funcion deshabilitar y ganador que me indica quien gano o si hubo empate*/
        deshabilitar()
        ganador()
    }
    }
opt_piedra.onclick = function () { /* Cuando de click en piedra */
    if (cont == intentos){ /* Evaluamos si el contador es igual a intentos desabilitamos y mostramos una alerta para que sepa el usuario que a terminado el juego */
        deshabilitar()
        alert('Finalizo el juego con exito. Da click en el boton reiniciar')
    }else{/* de lo contrario seguimos ejecutando */
        cont++/* contador */
        select_player1 = "piedra";
        img_opt_player1.src = "./img/piedra_izquierda.png"; /* Asignamos la imagen de piedra izquierda para player 1 */
        img_opt_player2.src = "./img/eva.png"; /* Asignamos la imagen de player 2 */
        select_player2 = opt_random(val_opt_random.toString()); /* Llamamos la funcion opt_random la cual esta mas abajo del codigo  */
        document.getElementById("result").innerText = "Escogiendo"; /*en el resultado mostramos escogiendo */

            setTimeout(function(){/* Uso la funcion setTimeout para que se demore en mostrar un poco el resultado o la imagen */
            display_option_player2(select_player2); /* Ejecuta la funcion de mostrar la imagen segun el valor de select_player*/
            game_vs(select_player1,select_player2); /* Ejecutamos la funcion de game_vs que explicare mas adelante */
            },1000)/* Se demora un segundo */
}}
/* se repite lo anterior con los demas botones */
resultado.onclick = function(){
    if (cont === intentos){
        deshabilitar()
        ganador()
    }
    }
opt_papel.onclick = function () {
    if (cont == intentos){
        deshabilitar()
        alert('Finalizo el juego con exito. Da click en el boton reiniciar')
    }else{
        cont++
        select_player1 = "papel";
        img_opt_player1.src = "./img/papel_izquierda.png";
        img_opt_player2.src = "./img/eva.png";
        select_player2 = opt_random(val_opt_random.toString());
        document.getElementById("result").innerText = "Escogiendo";

        setTimeout(function(){
            display_option_player2(select_player2);
            game_vs(select_player1,select_player2);
        },1000)
}}
resultado.onclick = function(){
    if (cont === intentos){
        deshabilitar()
        ganador()
    }
    }

opt_tijera.onclick = function () {
    if (cont == intentos){
        deshabilitar()
        alert('Finalizo el juego con exito. Da click en el boton reiniciar')
    }else{
        cont++
        select_player1 = "tijera";
        img_opt_player1.src = "./img/tijera_izquierda.png";
        img_opt_player2.src = "./img/eva.png";
        select_player2 = opt_random(val_opt_random.toString());
        document.getElementById("result").innerText = "Escogiendo";

        setTimeout(function(){
            display_option_player2(select_player2);
            game_vs(select_player1,select_player2);
        },1000)
}}
/* Llenamos un array con piedra, papel o tijera */
const val_opt_random = ["piedra","papel","tijera"];
function opt_random() {
    return [...val_opt_random] /* Retorma una una copia de manera desordenada */
    .sort(()=>Math.random() > 0.5 ? 1:-1)
    .slice(0,1);/* que nos devuelva la primera posicion de esa copia */
}

function game_vs(select_player1,select_player2){ 
    if (select_player1 == "piedra") { /* si select player 2 es igual a piedra entra a este if*/
        if (select_player2 == "piedra") { 
            vs = "same"; /* el vs es = a empate */
        } else if (select_player2 == "papel") {
            vs = "p2win"; /* de lo contario vs = ganó player 2 */
         }else { /* si no es ninguno gana player 1 */
            vs = "p1win";
        } 
    /* Tiene la misma logica que lo que explique arriba */
    } else if (select_player1 == "papel") {
        if (select_player2 == "papel") {
            vs = "same";
        } else if (select_player2 == "tijera") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }
    } else if (select_player1 == "tijera") {
        if (select_player2 == "tijera") {
            vs = "same";
        } else if (select_player2 == "piedra") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }
    }
/* Si vs es igual p1win */
    if (vs == "p1win") {
        /* Muestra que gana el jugador1 y pierde el jugador 2  */  
        document.getElementById("result").innerText = "Player 1 gana y Player 2 pierde";
        /* Damos color al resultado */
        document.getElementById("result").style.color = "#3FA796";
        ptos_player1++;/* sumamos un punto por cada vez que pase por aquí */
        document.getElementById("ptos_player1").innerText = ptos_player1; /* lo aignamos a ptos_playes */
    } else if (vs == "same") { /* lo mismo para lo siguente */
        document.getElementById("result").innerText = "Empate";
        document.getElementById("result").style.color = "#FEC260";
    } else if (vs == "p2win") {
        document.getElementById("result").innerText = "Player 2 gana y Player 1 pierde";
        document.getElementById("result").style.color = "#A10035";
        ptos_player2++;
        document.getElementById("ptos_player2").innerText = ptos_player2;
    }
}

function display_option_player2(select_player2){
    if (select_player2 == "piedra"){/* Si select_player 2 es == a piedra  traemos la imagen de piedra derecha*/
        img_opt_player2.src = "./img/piedra_derecha.png";
    /* Igual para los demas */
    } else if (select_player2 == "papel"){
        img_opt_player2.src = "./img/papel_derecha.png";
    } else {
        img_opt_player2.src = "./img/tijera_derecha.png";
    }
}

const reload = document.getElementById('reset');
reload.addEventListener('click', _ => {
    location.reload();/* cuando escuche un click  */
});

function deshabilitar(){ /* Funcion para desabilitar el boton de piedra, papel o tijera */
    const rock = document.getElementById('piedra');
    rock.disabled = true; /* lo cambiamos a true */
    const c = document.getElementById('papel');
    c.disabled = true; 
    const i = document.getElementById('tijera');
    i.disabled = true; 
    const z = document.getElementById('resultado');
    z.disabled = true; 
}

function ganador(){
    if (null){/* if condicion  */
        //pass
    }else if (ptos_player1 > ptos_player2){ /* si los puntos del jugador 1 son mayores a los del jugador 2 gana player 1  asi con los demas*/
        alert('Felicidades Player 1, Ganaste!!!')
    }else if (ptos_player2 > ptos_player1){
        alert('Felicidades Player 2, Ganaste!!!')
    }else if (ptos_player1 === ptos_player2 ){
        alert('Wow!, Empate!!')
    }else if (cont === intentos){
        alert('Finalizo el juego con exito. Da click en el boton reiniciar')}
}
