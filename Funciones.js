/**
 * Calcula Velocidad Final
 * @method Velocidad
 */

let Velocidad = () => {
    let v;
    let t;
    let re;
    const vMin = 0;
    const vMax = 100;
    const tMax = 3600;
    const tMin = 0;
    const g = 9.8;
    t = Number(document.VelocidadFinal.tiempo.value);
    v = Number(document.VelocidadFinal.velocidadInicial.value);

    if (isNaN(t) || t < tMin || t > tMax) {
        alert("El valor ingresado es incorrecto");
        document.VelocidadFinal.tiempo.value = "";
        document.VelocidadFinal.velocidad_total.value = "";
    }
    if (isNaN(v) || v < vMin || v > vMax) {
            alert("El valor ingresado es incorrecto");
        document.VelocidadFinal.velocidadInicial.value = "";
        document.VelocidadFinal.velocidad_total.value = "";
    } else {
        console.log(v, t);
        re = v + (g * t);
        document.VelocidadFinal.velocidad_total.value = Math.round(re * 1000) / 1000 + " m/s";
    }
}

let verLetra = (id, value) => {
    if (isNaN(value)) {
        alert("Se deben ingresar únicamente números");
        document.getElementById(id).value = "";
    }
}


/**
 * Calcula Posicion Final
 * @method Posicion
 */

let Posicion = () => {
    let re;
    let g = 9.8;
    let v = Number(document.PosicionFinal.velocidadInicial.value);
    let t = Number(document.PosicionFinal.tiempo.value);
    let a = Number(document.PosicionFinal.altura.value);

    const vMin = 0;
    const vMax = 100;
    const tMax = 3600;
    const tMin = 0;

    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    const anchoMax = canvas.width;

    if (isNaN(v) || v < vMin || v > vMax) {
        alert("El valor ingresado es incorrecto");
        document.PosicionFinal.velocidadInicial.value = "";
        document.PosicionFinal.posicion_total.value = "";
    }
    if (isNaN(t) || t < tMin || t > tMax) {
        alert("El valor ingresado es incorrecto");
        document.PosicionFinal.tiempo.value = "";
        document.PosicionFinal.posicion_total.value = "";
    }
    if (a < 0 || a >= anchoMax) {
        alert("El valor ingresado es incorrecto");
        document.PosicionFinal.altura.value = "";
        document.PosicionFinal.posicion_total.value = "";
    } else {
        console.log(v, t);
        re = (v * t) + (0.5 * g * (Math.pow(t, 2)));
        document.PosicionFinal.posicion_total.value = Math.round(re * 1000) / 1000 + " m";
    }
}


/**
 * Calcula el tiempo final
 * @method Tiempo
 */

let Tiempo = () => {
    let re;
    let g = 9.8;
    let vi = Number(document.TiempoFinal.velocidadInicial.value);
    let vf = Number(document.TiempoFinal.velocidadFinal.value);


    const vMax = 100;
    const vMin = 0;

    if (isNaN(vi) || vi < vMin || vi > vMax) {
        alert("El valor ingresado es incorrecto");
        document.TiempoFinal.velocidadInicial.value = "";
        document.TiempoFinal.tiempo_total.value = "";
    }
    if (isNaN(vf) || vf < vMin || vf > vMax) {
        alert("El valor ingresado es incorrecto");
        document.TiempoFinal.velocidadFinal.value = "";
        document.TiempoFinal.tiempo_total.value = "";
    } else {
        re = (vf - vi) / g;
        if (re < 0) {
            re = re * (-1);
        }
        console.log(vi, vf);
        document.TiempoFinal.tiempo_total.value = Math.round(re * 1000) / 1000 + " s";
    }
}

/**
 * Oculta y Muestra el resultado de cada operacion
 * @method mostrar_Resultado
 * @param {string} id - Id del elemento input en html
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
 * Realiza un dibujo y lo posiciona de acuerdo a los valores ingresados por el usuario.
 * @method animarBart
 * @param {number} posX - Contiene el valor del input que ingreso el usuario
 */

function animarBart(posX) {

    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    //const posMax = 250;
    // const posMin = document.PosicionFinal.posicion_total.value;
    const anchoMax = canvas.width;

    let img = new Image();
    img.src = "imagenes/bart.png";

    console.log(posX);

    if (posX < 0 || posX >= anchoMax) {
        abrirDialog();
    } else {
        img.onload = function () {
            canvas.width = canvas.width;
            ctx.drawImage(img, posX, 0, 320, 250);
        }
    }
}




