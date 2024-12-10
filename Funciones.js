/**
 * Calcula Velocidad Final. Si ingresa el usuario valores incorrectos, blanquea los campos necesarios
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

    console.log(v, t);
    re = v + (g * t);
    document.VelocidadFinal.velocidad_total.value = Math.round(re * 1000) / 1000 + " m/s";

    if (isNaN(t) || t < tMin || t > tMax) {
        alert("El valor ingresado es incorrecto");
        document.VelocidadFinal.tiempo.value = "";
        document.VelocidadFinal.velocidad_total.value = "";
    }
    if (isNaN(v) || v < vMin || v > vMax) {
        alert("El valor ingresado es incorrecto");
        document.VelocidadFinal.velocidadInicial.value = "";
        document.VelocidadFinal.velocidad_total.value = "";
    }
};

/**
 * Si el usuario ingresa una letra, o un símbolo, envía mensaje de error y se blanquea el campo
 * @method verLetra
 * @param {string} id - Id del elemento input en HTML
 * @param {number} value - Contiene el valor del input que ingresó el usuario
 */
let verLetra = (id, value) => {
    if (isNaN(value)) {
        alert("Se deben ingresar únicamente números");
        document.getElementById(id).value = "";
    }
};

/**
 * Calcula Posición Final. Si ingresa el usuario valores incorrectos, blanquea los campos necesarios
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

    console.log(v, t);
    re = (v * t) + (0.5 * g * (Math.pow(t, 2)));
    document.PosicionFinal.posicion_total.value = Math.round(re * 1000) / 1000 + " m";

    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    const altoMax = 321;

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
    if (a < 0 || a >= altoMax) {
        alert("El valor ingresado es incorrecto");
        document.PosicionFinal.altura.value = "";
        document.PosicionFinal.posicion_total.value = "";
    }
};

/**
 * Calcula el Tiempo final. Si ingresa el usuario valores incorrectos, blanquea los campos necesarios
 * @method Tiempo
 */
let Tiempo = () => {
    let re;
    let g = 9.8;
    let vi = Number(document.TiempoFinal.velocidadInicial.value);
    let vf = Number(document.TiempoFinal.velocidadFinal.value);

    const vMax = 100;
    const vMin = 0;

    console.log(vi, vf);
    re = (vf - vi) / g;
    if (re < 0) {
        re = re * (-1);
    }
    document.TiempoFinal.tiempo_total.value = Math.round(re * 1000) / 1000 + " s";

    if (isNaN(vi) || vi < vMin || vi > vMax) {
        alert("El valor ingresado es incorrecto");
        document.TiempoFinal.velocidadInicial.value = "";
        document.TiempoFinal.tiempo_total.value = "";
    }
    if (isNaN(vf) || vf < vMin || vf > vMax) {
        alert("El valor ingresado es incorrecto");
        document.TiempoFinal.velocidadFinal.value = "";
        document.TiempoFinal.tiempo_total.value = "";
    }
};

/**
 * Oculta y Muestra el resultado de cada operación
 * @method mostrar_Resultado
 * @param {string} id - Id del elemento input en HTML
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
};

/**
 * Realiza un dibujo y lo posiciona de acuerdo a los valores ingresados por el usuario.
 * @method animarBart
 */
let y = 0;
let dy = 2;

function animarBart() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "imagenes/bart.png";


    img.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 10, y, 150, 150);
    };

    // Movimiento vertical hacia abajo
    y += dy;


    if (y > canvas.height) {
        y = -150;
    }
}

/**
 * Inicia la animación con un intervalo.
 */
function iniciarAnimacion() {
    setInterval(animarBart, 20); // Llama repetidamente a animarBart cada 20ms
}

/**
 * Oculta y muestra los resultados calculados en el cuadro de resultados.
 * @method mostrar_ocultar
 * @param {string} id - Id del botón de radio seleccionado
 */
let mostrar_ocultar = (id) => {
    const resultDiv = document.getElementsByName("Result")[0];

    if (id === "mostrarResultados") {

        const velocidad = document.VelocidadFinal.velocidad_total.value || "No calculado";
        const posicion = document.PosicionFinal.posicion_total.value || "No calculado";
        const tiempo = document.TiempoFinal.tiempo_total.value || "No calculado";


        document.getElementById("res_velocidadInicial").innerText = velocidad;
        document.getElementById("res_tiempo").innerText = tiempo;
        document.getElementById("res_posicion").innerText = posicion;

        resultDiv.style.display = "block";
    } else if (id === "ocultarResultados") {
        resultDiv.style.display = "none";
    }
};



