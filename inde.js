//Una variable es un espacio en memoria que se utiliza para almacenar datos. 
//En JavaScript, las variables se pueden declarar utilizando las palabras-
//clave `var`, `let` o `const`.

let nombre = "Karen";
var apellido = "González";
const edad = 30;    

//Tipos de datos en Javascript
const texto = "Hola, soy un texto"; // String
const numero1 = 42; // Number
const numero2 = 50; // Number
const suma2 = 3 - 3; // Number
const booleano = true; //false // Boolean
let indefinido // Undefined
let nulo = null; // Null
let noesunnumero = NaN; // Not a Number
let suma = numero1 + numero2;
console.log(suma);
console.log(suma2); 

//Estructuras de control
//Condicionales
// = Asignación
// == Comparación de valor
// === Comparación de valor y tipo

//Contraseñas o ingreso de otras cosas
let contraseña = parseInt(prompt("Ingrese su contraseña: "));
if (contraseña === 123456) {
     console.log("contraseña correcta");
 } else {
     console.log("contraseña incorrecta");
}



// let numero = parseInt(prompt("Ingrese un número: "));

// if (numero >= 0) {
//     console.log("El número es positivo");
// } else {
//     console.log("El número es negativo");
// }

//Estructura de repeticion WHILE
// let nombre1 = "Cristián"
// let edad = parseInt(prompt("Ingrese su edad: "));

// while (edad < 16 || edad > 100 || isNaN(edad)) {
// edad = parseInt(prompt("Ingrese una edad válida (entre 16 y 100): "));
// }
// console.log("Edad válida: " + edad);


// let i = 2;
// while (i <= 20) {
//     console.log("Número: " + i);
//     i = i + 2;  //i++; // i = i + 1;
// }
//Usar un ciclo para imprimir los numeros pares entre 2 y 20
// for (let i=0; i <= 20; i += 2) {
//     console.log(i);
// }
//0 1 2 3 5

// let i = 1

// do { 

//     console.log(i)
//     i++
// } while (i <= 10)

let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let num3 = parseFloat(prompt("Ingrese el tercer número: "));
let suma1 = num1 + num2;
let operacion = num1 + num2 - num3;
let resta = num1 - num2;    
let multiplicacion = num1 * num2;
let division = num1 / num2; 
let potencia = num1 ** num2;
let modulo = num1 % num2;
let raizCuadrada = Math.sqrt(num1);
console.log("Suma: " + suma1);
console.log("Resta: " + resta); 
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);   
console.log("Potencia: " + potencia);
console.log("Módulo: " + modulo);   
console.log("Raíz cuadrada: " + raizCuadrada);
console.log("Operación: " + operacion);
//Operadores lógicos
let a = true;
let b = false;
let c = true;
let resultadoAnd = a && b; // AND
let resultadoOr = a || b; // OR
let resultadoNot = !a; // NOT
console.log("Resultado AND: " + resultadoAnd);
console.log("Resultado OR: " + resultadoOr);
console.log("Resultado NOT: " + resultadoNot);
//Operadores de comparación
let x = 10;
let y = 20;
let esIgual = x == y; // Igualdad
let esIdenticoXY = x === y; // Identidad
let esDiferente = x != y; // Diferencia
let esMayor = x > y; // Mayor que
let esMenor = x < y; // Menor que
let esMayorOIgual = x >= y; // Mayor o igual que
let esMenorOIgual = x <= y; // Menor o igual que

console.log("Es igual: " + esIgual);
console.log("Es idéntico: " + esIdenticoXY);
console.log("Es diferente: " + esDiferente);
console.log("Es mayor: " + esMayor);
console.log("Es menor: " + esMenor);
console.log("Es mayor o igual: " + esMayorOIgual);
console.log("Es menor o igual: " + esMenorOIgual);
//Operadores de asignación
let z = 5;
z += 3; // z = z + 3
z -= 2; // z = z - 2
z *= 4; // z = z * 4
z /= 2; // z = z / 2
z %= 3; // z = z % 3
console.log("Valor de z: " + z);
//Operadores de bits
let a1 = 5; // 0101 en binario
let b1 = 3; // 0011 en binario
let andBitwise = a1 & b1; // AND bit a bit
let orBitwise = a1 | b1; // OR bit a bit
let xorBitwise = a1 ^ b1; // XOR bit a bit
let notBitwise = ~a1; // NOT bit a bit
let leftShift = a1 << 1; // Desplazamiento a la izquierda
let rightShift = a1 >> 1; // Desplazamiento a la derecha
console.log("AND bit a bit: " + andBitwise);
console.log("OR bit a bit: " + orBitwise);
console.log("XOR bit a bit: " + xorBitwise);
console.log("NOT bit a bit: " + notBitwise);
console.log("Desplazamiento a la izquierda: " + leftShift);
console.log("Desplazamiento a la derecha: " + rightShift);
//Operadores de pertenencia
let array = [1, 2, 3, 4, 5];
let contiene = array.includes(3); // Verifica si el array contiene el elemento
let indice = array.indexOf(3); // Obtiene el índice del elemento
console.log("Contiene el elemento 3: " + contiene);
console.log("Índice del elemento 3: " + indice);
//Operadores de identidad
let objeto1 = { nombre: "Juan" };
let objeto2 = { nombre: "Juan" };
let sonIguales = objeto1 == objeto2; // Compara por valor
let sonIdenticos = objeto1 === objeto2; // Compara por referencia
console.log("Son iguales: " + sonIguales);
console.log("Son idénticos: " + sonIdenticos);
//Operadores de cadena
let cadena1 = "Hola";
let cadena2 = "Mundo";
let concatenacion = cadena1 + " " + cadena2; // Concatenación
let longitud = cadena1.length; // Longitud de la cadena
let subcadena = cadena1.substring(0, 2); // Subcadena
console.log("Concatenación: " + concatenacion);
console.log("Longitud de cadena1: " + longitud);
console.log("Subcadena de cadena1: " + subcadena);
//Operadores de asignación compuesta
let numero = 10;
numero += 5; // Suma y asigna
numero -= 3; // Resta y asigna
numero *= 2; // Multiplica y asigna
numero /= 4; // Divide y asigna
numero %= 3; // Módulo y asigna
console.log("Valor final de numero: " + numero);
//Operadores de comparación estricta
let a2 = 10;
let b2 = "10";
let esIgualEstricto = a2 === b2; // Compara valor y tipo
let esDiferenteEstricto = a2 !== b2; // Compara valor y tipo
console.log("Es igual estricto: " + esIgualEstricto);
console.log("Es diferente estricto: " + esDiferenteEstricto);
//Operadores de asignación lógica
let x1 = true;
let y1 = false;
let resultadoAndLogico = x1 && y1; // AND lógico
let resultadoOrLogico = x1 || y1; // OR lógico
console.log("Resultado AND lógico: " + resultadoAndLogico);
console.log("Resultado OR lógico: " + resultadoOrLogico);
//Operadores de comparación de identidad
let x2 = 5;
let y2 = "5";
let esIdentico = x2 === y2; // Compara valor y tipo
let esNoIdentico = x2 !== y2; // Compara valor y tipo
console.log("Es idéntico: " + esIdentico);
console.log("Es no idéntico: " + esNoIdentico);
//Operadores de pertenencia en cadenas
let cadena3 = "Hola, soy una cadena";
let contieneLetra = cadena3.includes("H"); // Verifica si la cadena contiene la letra   
let indiceLetra = cadena3.indexOf("H"); // Obtiene el índice de la letra
console.log("Contiene la letra 'H': " + contieneLetra);
console.log("Índice de la letra 'H': " + indiceLetra);
//Operadores de pertenencia en arrays
let array2 = [1, 2, 3, 4, 5];   
let contieneNumero = array2.includes(3); // Verifica si el array contiene el número
let indiceNumero = array2.indexOf(3); // Obtiene el índice del número
console.log("Contiene el número 3: " + contieneNumero); 
console.log("Índice del número 3: " + indiceNumero);  