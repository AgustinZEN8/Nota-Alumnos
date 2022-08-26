pintarAlumnosStorage();

function pintarAlumnosStorage(){
  document.getElementById("table__body").innerHTML = "";
  
  for (let i=1; i <= localStorage.length; i++){
    const alumno = JSON.parse(localStorage.getItem(i));

    const tableRow = document.createElement("tr");
    const rowH = document.createElement("th");
    const rowName = document.createElement('td');
    const rowAprobado = document.createElement('td');
    const rowDesaprobado = document.createElement('td');
    const rowPromedio = document.createElement('td');

    rowH.innerHTML = alumno.id; 
    rowName.innerHTML = alumno.firstName; 
    rowPromedio.innerHTML = alumno.promedioalumno;
    alumno.estaAprobado ? rowAprobado.innerHTML = "✓" : rowDesaprobado.innerHTML = "X"; 
    
    rowH.setAttribute("scope", "row");
    rowH.classList.add('text-center');
    rowName.classList.add('text-center','llamas');
    rowAprobado.classList.add('text-center','aprobado');
    rowDesaprobado.classList.add('text-center','desaprobado');
    alumno.promedioalumno < 7 ? rowPromedio.classList.add('text-center','promedioB'): rowPromedio.classList.add('text-center','promedioA');
   
    tableRow.appendChild(rowH);
    tableRow.appendChild(rowName);
    tableRow.appendChild(rowAprobado);
    tableRow.appendChild(rowDesaprobado);
    tableRow.appendChild(rowPromedio);

    document.getElementById("table__body").appendChild(tableRow); 
  }
}


function solicitarAlumno() {
  let nombre = prompt("Ingresar nombre y apellido");
  let PriCuatri = parseInt(prompt("Ingrese nota del primer cuatrimestre"));
  let SegCuatri = parseInt(prompt("Ingrese nota del segundo cuatrimestre"));
  let TerCuatri = parseInt(prompt("Ingrese nota del tercer cuatrimestre"));

  let promedio = (esNotaValida(PriCuatri, "primer")+  esNotaValida(SegCuatri, "segundo")+  esNotaValida(TerCuatri, "tercero")) / 3 ;

  alumno = CrearAlumno(nombre, promedio);
  
  if ((promedio) >= 7) { 
    alert("El alumno " + nombre + " se encuentra aprobado (" + promedio + ").");
    alumno.estaAprobado = true;
  }
  else {
    alert("El alumno "+ nombre + " se encuentra desaprobado (" + promedio + ").");
    alumno.estaAprobado = false;
  }

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
  var posicion = localStorage.length;
  let alumno = {
    id : posicion + 1, 
    firstName: nombreAlumno,
    promedioalumno: promedioAlumno,
    estaAprobado: false,
  } 
  localStorage.setItem(alumno.id,JSON.stringify(alumno));
  pintarAlumnosStorage();
  return alumno;
};

let boton = document.getElementById("boton");
boton.addEventListener("click",solicitarAlumno);

