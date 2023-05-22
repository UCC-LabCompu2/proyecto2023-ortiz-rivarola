/**
 * Calcula Velocidad Final
 * @method Velocidad
 * @param {string} id - Id del elemento input radio en html
 */


let Velocidad = ()=>{
    let re, v, t, g;
    v = Number(document.VelocidadFinal.velocidadInicial.value);
    t = Number(document.VelocidadFinal.tiempo.value);
    g = document.getElementById("g");
    if (isNaN(v)) {
        alert("El valor ingresado es incorrecto");
        v = "";
    }
    if (isNaN(t)) {
        alert("El valor ingresado es incorrecto");
        t = "";
    }
    if (g === "diezms"){
        g=10;
    } else if (g === "nuevems"){
        g=9.8;
    }
    re = v + (g*t);
    document.VelocidadFinal.velocidad_total.value = re;
}

/**
 * Calcula Posicion Final
 * @method Posicion
 * @param {string} id - Id del elemento input radio en html
 */


let Posicion = ()=>{
    let re, v, g, a;
    let t = document.getElementById("tiempo").value;
    t = Math.pow(t,2);
    v = Number(document.PosicionFinal.velocidadInicial.value);
    a = Number(document.PosicionFinal.altura.value);
    g = document.getElementById("gravedad");
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
    if (g === "diez"){
        g=10;
    } else if (g === "nueve"){
        g=9.8;
    }
    re = a + (v*t)+(0.5*g*(t));
    document.PosicionFinal.posicion_total.value = re;
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
    g = document.getElementById("grav");
    if (isNaN(vi)) {
        alert("El valor ingresado es incorrecto");
        vi = "";
    }
    if (isNaN(vf)) {
        alert("El valor ingresado es incorrecto");
        vf = "";
    }
    if (g === "diezm"){
        g=10;
    } else if (g === "nuevem"){
        g=9.8;
    }
    re = (vf -vi)/g;
    document.TiempoFinal.tiempo_total.value = re;
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