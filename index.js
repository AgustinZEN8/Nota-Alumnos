let alumnosAprobados = 0;
let alumnosDesaprobados = 0;

function solicitarAlumno() {
  let nombre = prompt("Ingresar nombre y apellido");

  let notaPrimerCuatrimestre = prompt(
    "Ingrese nota del primer cuatrimestre"
  );
  let notaSegundoCuatrimestre = prompt(
    "Ingrese nota del segundo cuatrimestre"
  );
  let notaTercerCuatrimestre = prompt(
    "Ingrese nota del tercer cuatrimestre"
  );

  esNotaValida(notaPrimerCuatrimestre, "primer");
  esNotaValida(notaSegundoCuatrimestre, "segundo");
  esNotaValida(notaTercerCuatrimestre, "tercero");

  if (
    notaFinalDelAlumno(
      notaPrimerCuatrimestre,
      notaSegundoCuatrimestre,
      notaTercerCuatrimestre
    ) > 21
  ) {
    alumnosAprobados++;
    alert("El alumno " + nombre + " se encuentra aprobado");
  } else {
    alumnosDesaprobados++;
    alert(`El alumno ${nombre} se encuentra desaprobado.`);
  }
}

function notaFinalDelAlumno(primerNota, segundaNota, tercerNota) {
  let notaFinal = (primerNota + segundaNota + tercerNota) / 3;
  return notaFinal;
}

function esNotaValida(unaNota, cuatrimestre) {
   
  while ( parseInt(unaNota) < 0 || parseInt(unaNota) > 10 ||  isNaN(parseInt(unaNota)))  {
    unaNota = prompt(
      "ERROR:  Ingrese nota del "+ cuatrimestre + " cuatrimestre, porfavor ingrese numeros del 1 al 10"
    );
  }
}

solicitarAlumno();
