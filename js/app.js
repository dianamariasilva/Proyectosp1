var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes

}

function Persona(nombre, porc_tec, porc_HSE) {
  this.nombre = nombre;
  this.porc_tec = porc_tec;
  this.porc_HSE = porc_HSE;
};

function agregarEstudiante() {
  var nombreEstudiante = prompt ("Nombre de la estudiante: ");
  var porcTecnico = prompt ("Porcentaje técnico: ");
  var porcHabSocEmo = prompt ("Porcentaje Habilidades Socio-emocionales: ");

  var estudiante = new Persona(nombreEstudiante, porcTecnico, porcHabSocEmo);
  estudiantes.push(estudiante);

  return estudiante;
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

}
//
function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.porc_tec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.porc_HSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}
//
function mostrarLista() {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var template = '';
    for (var i = 0; i < estudiantes.length; i++ ) {
      var estudiante = estudiantes[i];
      template += mostrar(estudiante);
    }

    return template;
}
//
function buscar(nombre) {
  var nombreMin = nombre.toLowerCase();
  for (var i = 0; i < estudiantes.length; i++ ) {
    var estudiante = estudiantes[i];
    if (estudiante.nombre.toLowerCase() == nombreMin) {
      console.log(estudiante)
      return estudiante;
    }
  }
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
}
//
/* function topTecnico(estudiantes) {
     estudiantes.sort(function (a,b){
     return a.porc_tec - b.porc_tec;
   });
   return res;
 }
*/
//     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
//
// }
//
// function topHSE(estudiantes) {
//     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
//
// }
