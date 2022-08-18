let alumnosRegistrados = [];

function solicitarAlumno() {
  let nombre = prompt("Ingresar nombre y apellido");
  let PriCuatri = parseInt (prompt("Ingrese nota del primer cuatrimestre"));
  let SegCuatri = parseInt (prompt("Ingrese nota del segundo cuatrimestre"));
  let TerCuatri = parseInt (prompt("Ingrese nota del tercer cuatrimestre"));

  document.getElementById("llamas").innerHTML = nombre;

  let promedio = (esNotaValida(PriCuatri, "primer")+  esNotaValida(SegCuatri, "segundo")+  esNotaValida(TerCuatri, "tercero")) / 3 ;

  alumno = CrearAlumno(nombre, promedio);
  
  if ((promedio) > 6) { 
    alert("El alumno " + nombre + " se encuentra aprobado (" + promedio + ").");
    alumno.estaAprobado = true;
    document.getElementById("aprobado").innerHTML = "✓";
    document.getElementById("desaprobado").innerHTML = "";
  }
  else {
    alert("El alumno "+ nombre + " se encuentra desaprobado (" + promedio + ").");
    alumno.estaAprobado = false;
    document.getElementById("desaprobado").innerHTML = "X";
    document.getElementById("aprobado").innerHTML = "";
  }

  alumnosRegistrados.push(alumno);

}

function esNotaValida(unaNota, cuatrimestre) {
  while ( parseInt(unaNota) < 0 || parseInt(unaNota) > 10 ||  isNaN(parseInt(unaNota)))  {
    unaNota = prompt(
      "ERROR:  Ingrese nota del "+ cuatrimestre + " cuatrimestre, porfavor ingrese numeros del 1 al 10"
    );
  }
  return parseInt(unaNota);


}

function CrearAlumno (nombreAlumno,promedioAlumno){

  let alumno = {
    firstName: nombreAlumno,
    promedioalumno: promedioAlumno,
    estaAprobado: false,
  }
  return alumno;
};

function obtenerAlumnosAprobados (ListaAlumnos) {
  const aprobados = ListaAlumnos.filter(item => item.estaAprobado === true );
  return aprobados;
}
function obtenerAlumnosDesaprobados (ListaAlumnos) {
  const desaprobados = ListaAlumnos.filter(item => item.estaAprobado === false );
  return desaprobados;
}
console.log('Alumnos aprobados: ',obtenerAlumnosAprobados(alumnosRegistrados));
console.log('Alumnos desaprobados: ',obtenerAlumnosDesaprobados(alumnosRegistrados));
console.log('Alumnos registrados: ',alumnosRegistrados);

let boton = document.getElementById("boton");
boton.addEventListener("click",solicitarAlumno);

