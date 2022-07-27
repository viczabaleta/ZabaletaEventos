let personas = [];

let formulario;

let inputNombre;
let inputApellido;
let inputEdad;
let inputDias;

let precioPersona = 1000;

let tabla;
let errores;

//----------------local storage

let aux = localStorage.getItem('personas');

if (!aux) {
    personas = [];
} else {
    personas = JSON.parse(aux)
}

//-----------personas

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

function inicializarElementos() {
    formularioPersonas = document.getElementById("formularioPersonas");
    formularioTiempo = document.getElementById("formularioTiempo");
    inputNombre = document.getElementById("nombre");
    inputApellido = document.getElementById("apellido");
    inputEdad = document.getElementById("edad");
    inputDias = document.getElementById("dias")
    tabla = document.getElementById("tablaPersonas");
    error1 = document.querySelector(".error1")
    error2 = document.querySelector(".error2")
    errorTiempoMax = document.querySelector(".errorTiempoMax")
    error1.style.display = "none";
    error2.style.display = "none";
    errorTiempoMax.style.display = "none";
}
inicializarElementos()

//---------------------formulario personas

formularioPersonas.onsubmit = (event) => {
    event.preventDefault();

    let nuevaPersona = new Persona(inputNombre.value, inputApellido.value, inputEdad.value)
    if (inputNombre.value != "" && inputApellido.value != "" && inputEdad.value != "") {
        personas.push(nuevaPersona)

        personas.reverse()
        limpiarTabla();
        agregarPersonasTabla()
        error1.style.display = "none"
        formularioPersonas.reset()
    } else {
        error1.style.display = "block"
    }


}

function limpiarTabla() {
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1)
    }
}


function agregarPersonasTabla() {
    personas.forEach(persona => {
        let tabla = document.querySelector(".tabla")
        let filaTabla = document.createElement("tr")

        filaTabla.innerHTML = `
        <td>${persona.nombre} </td>
        <td>${persona.apellido} </td>
        <td>${persona.edad} </td>
        `
        localStorage.setItem('personas', JSON.stringify(personas));

        tabla.append(filaTabla)

    });


}

// const menor = persona => persona.edad <= 12;
// const mayor = persona => persona.edad > 12;


// const ninios = personas.filter(menor);
// const adultos = personas.filter(mayor);

// console.log(ninios);
// console.log(adultos);

//-----------------------------------------calcular precio total

let tiempo = inputDias.value

function mostrarPrecioFinal() {
    let precioTotal = document.getElementById('precioFinal');

    let cantidad = personas.length;
    let precioFinal = precioPersona*tiempo*cantidad;

    let infoPrecio = `
    <div class="card-precio">
       <h4>El precio final para ${personas.length} personas por ${Number(tiempo)} dias es de $${precioFinal}.</h4>
    </div>
    `
    precioTotal.innerHTML += infoPrecio


}


formularioTiempo.onsubmit = (event) => {

    event.preventDefault();


    if (inputDias.value != "" && inputDias.value <= 30) {

        mostrarPrecioFinal()
        error2.style.display = "none"
        errorTiempoMax.style.display = "none"

    } else if (inputDias.value > 30) {
        errorTiempoMax.style.display = "block"
    } else {
        error2.style.display = "block"
    }

}

// const precioFinal = (dias) => {

//     if (dias <= diasMax) {
//         let precio = ((adultos.length) * precioAdulto) + ((ninios.length) * precioNinio);

//         function mostrarPrecioFinal() {
//             let precioTotal = document.getElementById('precio-final');

//             let infoPrecio = `
//             <div class="card-precio">
//                <h4>El precio final para ${personas.length} personas por ${dias} dias es de $${dias * precio}.</h4>
//             </div>
//             `
//             precioTotal.innerHTML += infoPrecio

//         }
//         mostrarPrecioFinal()

//     } else {
//         alert('La estadia maxima es de ' + diasMax + ' dias.')
//     }

// }

