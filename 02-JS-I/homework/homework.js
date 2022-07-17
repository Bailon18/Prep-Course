// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras: 1
const nuevaString = 'Holitas gente';

// Crea una variable numérica, puede ser cualquier número:2
const nuevoNum = 923;

// Crea una variable booleana:3
const nuevoBool = true;

// Resuelve el siguiente problema matemático:4
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:5
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:6
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str 7
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números 8
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}

function resta(x, y) { 
  // Resta "y" de "x" y devuelve el valor 9
  // Tu código:
  return x - y;
}

function multiplica(x, y) { 
  // Multiplica "x" por "y" y devuelve el valor 10
  // Tu código:
  return x * y;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor 11
  // Tu código:
  return x / y;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales 12
  // De lo contrario, devuelve "false"
  // Tu código:
  return x === y;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud  13
  // De lo contrario, devuelve "false"
  // Tu código:


  return str1.length === str2.length ? true : false;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa  14
  // De lo contrario, devuelve "false"
  // Tu código:
  
  return num < 90 ? true : false;
  
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta 15
  // De lo contrario, devuelve "false"
  // Tu código:
  
  return num > 50 ? true : false;
}

function obtenerResto(x, y) { 
  // Obten el resto de la división de "x" entre "y"  16
  // Tu código:
  return x % y;
}

function esPar(num) {
  // Devuelve "true" si "num" es par  17
  // De lo contrario, devuelve "false"
  // Tu código:
 
  return num % 2 == 0 ? true : false;  
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar  18
  // De lo contrario, devuelve "false"
  // Tu código:
  
  return num % 2 != 0 ? true : false;

}

// DUDA
function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado  19
  // ojo: No es raiz cuadrada!
  // Tu código:
  
  return Math.pow(num, 2) ;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo 20
  // Tu código:
  return Math.pow(num,3);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"  21
  // Tu código:
  return Math.pow(num, exponent) ;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return  null;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
