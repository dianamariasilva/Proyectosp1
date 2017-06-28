var estudiantes = [];

function obtenerListaEstudiantes() {
    // Obtener la lista de estudiantes
return estudiantes;
}

function Persona(nombre, porc_tec, porc_HSE) {
  this.nombre = nombre;
  this.porc_tec = porc_tec;
  this.porc_HSE = porc_HSE;
};

function agregarEstudiante() {
  // Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
  var nombreEstudiante = prompt ("Nombre de la estudiante: ");
  var porcTecnico = prompt ("Porcentaje técnico: ");
  var porcHabSocEmo = prompt ("Porcentaje Habilidades Socio-emocionales: ");
  porcTecnico=porcTecnico.toLowerCase();
  var estudiante = new Persona(nombreEstudiante, porcTecnico, porcHabSocEmo);
  // Estudiante es agregado a la lista de estudiantes
  estudiantes.push(estudiante);

  return estudiante;
    // Retorna el estudiante recientemente creado

}

function mostrar(estudiante) {
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

function mostrarLista(estudiantes) {
    var template = '';
    for (var i = 0; i < estudiantes.length; i++ ) {
      //mostrar cada estudiante (objetos) al total de objetos
      var estudiante = estudiantes[i];
      template += mostrar(estudiante);
      //Devolver en funcion estudiante
    }

    return template;
}

function buscar(nombre,estudiantes) {
  //Estandarizar nombre
  var nombreMin = nombre.toLowerCase();
    for (var i = 0; i < estudiantes.length; i++ ) {
      var estudiante = estudiantes[i];
      if (estudiante.nombre.toLowerCase() == nombreMin) {
        console.log(estudiante)
        return estudiante;
      }
  }


 function topTecnico(estudiantes) {
   estudiantes.sort(function(a,b){
     return a.porc_tec - b.porc_tec
   });
 }
// 
 function topHSE(estudiantes) {
   estudiantes.sort(function(a,b){
     return a.porc_HSE - b.porc_HSE
   });
}
