/**
 * Calcula Velocidad Final
 * @method Velocidad
 * @param {string} id - Id del elemento input radio en html
 */


let Velocidad = ()=>{
    let re, v, t, g;
    v = Number(document.VelocidadFinal.velocidadInicial.value);
    t = Number(document.VelocidadFinal.tiempo.value);
    g = document.getElementById("gravedad_V").value;
    if (isNaN(v)) {
        alert("El valor ingresado es incorrecto");
        v = "";
    }
    if (isNaN(t)) {
        alert("El valor ingresado es incorrecto");
        t = "";
    }
    re = v + (g*t);
    document.VelocidadFinal.velocidad_total.value = Math.round(re * 1000) / 1000 + "m/s";
}

/**
 * Calcula Posicion Final
 * @method Posicion
 * @param {string} id - Id del elemento input radio en html
 */


let Posicion = ()=>{
    let re, v, g, a, t;
    t = Number (document.PosicionFinal.tiempo.value);
    v = Number(document.PosicionFinal.velocidadInicial.value);
    a = Number(document.PosicionFinal.altura.value);
    g = 9.8;
    if (isNaN(v)) {
        alert("El valor ingresado es incorrecto");
        v = "";
    }
    if (isNaN(t)) {
        alert("El valor ingresado es incorrecto");
        t = "";
    }
    if (isNaN(a)) {
        alert("El valor ingresado es incorrecto");
        a = "";
    }
    re = a + (v*t)+(0.5*g*(Math.pow(t, 2)));
    document.PosicionFinal.posicion_total.value = Math.round(re * 1000) / 1000 + "m";
}

/**
 * Calcula el tiempo final
 * @method Tiempo
 * @param {string} id - Id del elemento input radio en html
 */


let Tiempo = ()=>{
    let re, vi, g, vf;
    vf = Number(document.TiempoFinal.velocidadFinal.value);
    vi = Number(document.TiempoFinal.velocidadInicial.value);
    g = 9.8;
    if (isNaN(vi)) {
        alert("El valor ingresado es incorrecto");
        vi = "";
    }
    if (isNaN(vf)) {
        alert("El valor ingresado es incorrecto");
        vf = "";
    }
    re = (vf - vi)/g;
    if (re < 0){
        re = re*(-1);
    }
    document.TiempoFinal.tiempo_total.value = Math.round(re * 1000) / 1000 + "s";
}

/**
 * Oculta y Muestra el resultado de cada operacion
 * @method mostrar_Resultado
 * @param {string} id - Id del elemento input radio en html
 */

let mostrar_Resultado = (id) => {
    if (id === "boton1") {
        document.getElementsByName("velocidad_total")[0].style.display = 'block';
    } else {
        document.getElementsByName("velocidad_total")[0].style.display = 'none';
    }
    if (id === "boton2") {
        document.getElementsByName("posicion_total")[0].style.display = 'block';
    } else {
        document.getElementsByName("posicion_total")[0].style.display = 'none';
    }
    if (id === "boton3") {
        document.getElementsByName("tiempo_total")[0].style.display = 'block';
    } else {
        document.getElementsByName("tiempo_total")[0].style.display = 'none';
    }
}

/**
 * Función canva: animar imágen.
 * @method Canva
 * @param {string} Id - Id del elemento canva.
 */
var y=0;
var dy=2;
function animarBart (){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "imagenes/bart.png";

    img.onload = function () {

        canvas.width=canvas.width;
        ctx.drawImage(img,100,y);
    }

    y+=dy;

    console.log ("La coordenada de y es: "+y);
    if (y>canvas.width){
        y=0;
    }
}

