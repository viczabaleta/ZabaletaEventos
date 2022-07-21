let personas = [];

let formulario;

let inputNombre;
let inputApellido;
let inputEdad;

let tabla;
let errores;

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

function inicializarElementos(){
    formulario = document.getElementById("formulario");
    inputNombre = document.getElementById("nombre");
    inputApellido = document.getElementById("apellido");
    inputEdad = document.getElementById("edad");
    tabla = document.getElementById("tablaPersonas");
    errores = document.querySelector(".errores")
    errores.style.display = "none";
}
inicializarElementos()

formulario.onsubmit = (event) => {
    event.preventDefault();

    let nuevaPersona = new Persona(inputNombre.value, inputApellido.value, inputEdad.value)
    if(inputNombre.value != "" && inputApellido.value != "" && inputEdad.value != ""){
        personas.push(nuevaPersona)

        personas.reverse()
        limpiarTabla();
        agregarPersonasTabla()
        errores.style.display = "none"
        formulario.reset()
    }else{
        errores.style.display = "block"
    }
    
    
}

function limpiarTabla(){
    while(tabla.rows.length > 1){
        tabla.deleteRow(1)
    }
}


function agregarPersonasTabla(){
    personas.forEach(persona => {
        let tabla = document.querySelector(".tabla")
        let filaTabla = document.createElement("tr")

        filaTabla.innerHTML = `
        <td>${persona.nombre} </td>
        <td>${persona.apellido} </td>
        <td>${persona.edad} </td>
        `

    tabla.append(filaTabla)

    });
}