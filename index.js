//plantilla principal de todos los proyectos
console.log("Hello, World!");

//contraseña correcta
let contraseña = parseInt(prompt("Ingrese su contraseña: ")); 
if (contraseña === 123456) {
    console.log("Contraseña correcta");
} else {
    console.log("Contraseña incorrecta");   
}

//numeros positivos positivos, negativos y cero
let numero = parseInt(prompt("Ingrese un número: "));  
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero === 0) {
    console.log("El número es cero");
} else {
    console.log("El número es negativo");
}
let numero2 = parseInt(prompt("ingese un numero:"));
if (numero2 > 0) {
    console.log("el numero es postivo");
} else if (numero2 === 0) {
    console.log("el numero es cero");
} else {
    console.log("el numero es negativo");
}
let numero3 = parseInt(prompt("ingrese un numero:"));
if (numero3 > 0) { 
    console.log("el numero es positivo");
} else if (numero3 === 0) {
    console.log("el numero es cero");
} else {
    console.log("el numero es negativo");
}   
//Estructura de repetición WHILE
let edad = parseInt(prompt("Ingrese su edad: "));
while (edad < 16 || edad > 100 || isNaN(edad)) {
    edad = parseInt(prompt("Ingrese una edad válida (entre 16 y 100): "));
}
console.log("Edad válida: " + edad);
//Usar un ciclo para imprimir los números pares entre 2 y 20
for (let i = 2; i <= 200; i += 2) {
    console.log("Número: " + i);
}   
//Operadores de comparación
// Variable de prueba
let edadTest = parseInt(prompt("Ingrese su edad para pruebas: "));

// Crear un elemento para mostrar los resultados en la página
let resultDiv = document.getElementById("result");
if (!resultDiv) {
    resultDiv = document.createElement("div");
    resultDiv.id = "result";
    document.body.appendChild(resultDiv);
}

// Ejemplo con AND (&&)
if (edadTest >= 18 && edadTest < 65) {
    console.log("Es adulto en edad laboral");
    resultDiv.innerHTML += "Es adulto en edad laboral<br>";
}

// Ejemplo con OR (||)
if (edadTest < 18 || edadTest > 65) {
    console.log("No está en edad laboral");
    resultDiv.innerHTML += "No está en edad laboral<br>";
}

// Ejemplo con NOT (!)
if (!(edadTest < 18)) {
    console.log("Es mayor de edad");
    resultDiv.innerHTML += "Es mayor de edad<br>";
}
//Usar un ciclo do while para imprimir los números del 1 al 10
let i = 1;
do { 
    console.log(i);
    i++;
} while (i <= 100
);
//Usar un ciclo for para imprimir los números del 1 al 100
for (let j = 1; j <= 100; j++) {
    console.log(j);
}
//Usar un ciclo for para imprimir los números del 1 al 100, pero solo los múltiplos de 3
for (let k = 1; k <= 300; k++) {
    if (k % 3 === 0) {
        console.log(k);
    }
}
//Usar un ciclo for para imprimir los números del 1 al 100, pero solo los múltiplos de 5
for (let l = 1; l <= 300; l++) {
    if (l % 5 === 0) {
        console.log(l);
    }
}   
//Operaciones matemáticas básicas
//Suma, resta, multiplicación, división, potencia, módulo y raíz cuadrada
// Solicitar números al usuario y realizar operaciones matemáticas 
let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let num3 = parseFloat(prompt("Ingrese el tercer número: "));
let suma1 = num1 + num2;
let operacion = num1 + num2 - num3;
let differenceBetweenNum1AndNum2 = num1 - num2;    
let multiplicacion1 = num1 * num2;
let division1 = num1 / num2; 
let potencia1 = num1 ** num2;
let modulo1 = num1 % num2;
let raizCuadrada1 = Math.sqrt(num1);
console.log("Suma: " + suma1);
console.log("Resta: " + differenceBetweenNum1AndNum2); 
console.log("Multiplicación: " + multiplicacion1);
console.log("División: " + division1);   
console.log("Potencia: " + potencia1);
console.log("Módulo: " + modulo1);   
console.log("Raíz cuadrada: " + raizCuadrada1);
console.log("Operación: " + operacion);
//Operaciones matemáticas con números fijos
let num4 = parseFloat(prompt("Ingrese el primer número fijo: "));
let num5 = parseFloat(prompt("Ingrese el segundo número fijo: "));
let fixedSuma = num4 + num5;
let fixedResta = num4 - num5;
let fixedMultiplicacion = num4 * num5;
let fixedDivision = num4 / num5;
let fixedPotencia = num4 ** num5;
let fixedModulo = num4 % num5;
console.log("Suma (fijos): " + fixedSuma);
console.log("Resta (fijos): " + fixedResta);
console.log("Multiplicación (fijos): " + fixedMultiplicacion);
console.log("División (fijos): " + fixedDivision);
console.log("Potencia (fijos): " + fixedPotencia);
console.log("Módulo (fijos): " + fixedModulo);
console.log("Raíz cuadrada (fijos): " + Math.sqrt(num4));
//Operadores lógicos    
let a = true;
let b = false;
let andOperation = a && b; // AND
let orOperation = a || b; // OR
let notOperation = !a; // NOT
console.log("Resultado AND: " + andOperation);
console.log("Resultado OR: " + orOperation);
console.log("Resultado NOT: " + notOperation);


//Operadores aritméticos
let aNum = 10;
let bNum = 5;
let suma = aNum + bNum; // Suma
let resta = aNum - bNum; // Resta
let multiplicacion = aNum * bNum; // Multiplicación
let division = aNum / bNum; // División
let potencia = aNum ** bNum; // Potencia
let modulo = aNum % bNum; // Módulo
let raizCuadrada = Math.sqrt(aNum); // Raíz cuadrada
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Potencia: " + potencia);
console.log("Módulo: " + modulo);
console.log("Raíz cuadrada: " + raizCuadrada);
//Operadores de comparación
let x = 10;
let y = 20;
let isEqual = x === y; // Igualdad
let isNotEqual = x !== y; // Desigualdad
let isGreater = x > y; // Mayor que
let isLess = x < y; // Menor que
let isGreaterOrEqual = x >= y; // Mayor o igual que
let isLessOrEqual = x <= y; // Menor o igual que
console.log("Es igual: " + isEqual);
console.log("Es diferente: " + isNotEqual);
console.log("Es mayor: " + isGreater);
console.log("Es menor: " + isLess);
console.log("Es mayor o igual: " + isGreaterOrEqual);
console.log("Es menor o igual: " + isLessOrEqual);
