//PROMEDIO ALTURA DE UNA MUJER//

var altura1;
var altura2;
var altura3;

function ingresarAltura() {
  altura1 = parseFloat(prompt("Ingrese la primer altura"));
  altura2 = parseFloat(prompt("Ingrese la segunda altura"));
  altura3 = parseFloat(prompt("Ingrese la tercera altura"));
}

function validar() {
  while (altura1 > 2.0) {
    alert("La altura ingresada debe ser menor a 2 metros");
    altura1 = parseFloat(prompt("Ingrese la altura de la primer mujer: "));
  }
  while (altura2 > 2.0) {
    alert("La altura ingresada debe ser menor a 2 metros");
    altura2 = parseFloat(prompt("Ingrese la altura de la segunda mujer: "));
  }
  while (altura3 > 2.0) {
    alert("La altura ingresada debe ser menor a 2 metros");
    altura3 = parseFloat(prompt("Ingrese la altura de la tercer mujer: "));
  }
}

function promediarAltura() {
  let resultadoAltura = (altura1 + altura2 + altura3) / 3;
  alert(
    "El promedio  de la altura de una mujer final es: " +
      resultadoAltura.toFixed(2)
  );
  return resultadoAltura;
}

ingresarAltura();
validar();
console.log(promediarAltura());
