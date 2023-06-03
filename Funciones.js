/**
 * Calcula Velocidad Final
 * @method Velocidad
 */


let Velocidad = (v, t) => {
    let re, g;
    const vMin = 0;
    const vMax = 100;
    const tMax = 3600;
    const tMin = 0;
    g = 9.8;

    if (t < tMin || t > tMax || v < vMin || v > vMax) {
        abrirDialog();
    } else {
        console.log(v,t)
        re = v + (g * t);
        document.VelocidadFinal.velocidad_total.value = Math.round(re * 1000) / 1000 + "m/s";
    }
}

/**
 * Calcula Posicion Final
 * @method Posicion
 */


let Posicion = (v, t) => {
    let re, g;
    g = 9.8;
    const vMin = 0;
    const vMax = 101;
    const tMax = 3601;
    const tMin = 0;

    if (v < vMin || v >= vMax) {
    abrirDialog();
    }
    if (t < tMin || t >= tMax) {
    abrirDialog();
    }
    console.log(v,t);
    re = (v * t) + (0.5 * g * (Math.pow(t, 2)));
    document.PosicionFinal.posicion_total.value = Math.round(re * 1000) / 1000 + "m";
}

/**
 * Calcula el tiempo final
 * @method Tiempo
 *
 */
let Tiempo = (vi, vf) => {
    let re, g;
    const vMax = 100;
    const vMin = 0;
    g = 9.8;
    re = (vf - vi) / g;
    if (re < 0) {
        re = re * (-1);
    }
    if (vi < vMin || vi > vMax || vf < vMin || vf > vMax) {
        abrirDialog();
    } else {
        re = (vf - vi) / g;
        if (re < 0) {
            re = re * (-1);
        }
        console.log(vi, vf);
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

let y = 0;
let dy = 2;

function animarBart() {


    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let img = new Image();
    img.src = "imagenes/bart.png";

    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, 300, y, 320, 250);
    }


    y += dy;

    console.log("La coordenada de y es: " + y);
    if (y > canvas.width) {
        y = 0;
    }


}

/**
 * Mensajes de error cuando el usuario ingresa valores incorrectos
 * @method openDialog
 */

let abrirDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

/**
 * Cierra mensajes de error
 * @method cerrarDialog
 *
 */
let cerrarDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}



