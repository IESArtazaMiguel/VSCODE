// Crear título
const titulo = document.createElement("h2");
titulo.textContent = "¿Puedes votar?";
document.body.appendChild(titulo);

// Crear label
const label = document.createElement("label");
label.setAttribute("for", "edad");
label.textContent = "Ingresa tu edad:";
document.body.appendChild(label);

// Crear input
const input = document.createElement("input");
input.type = "number";
input.id = "edad";
input.placeholder = "Ej: 18";
document.body.appendChild(input);

// Crear botón
const boton = document.createElement("button");
boton.textContent = "Verificar";
boton.onclick = verificar;
document.body.appendChild(boton);

// Crear párrafo para el mensaje
const mensaje = document.createElement("p");
mensaje.id = "Mensaje";
document.body.appendChild(mensaje);

// Función para verificar edad
function verificar() {
  let edad = parseInt(input.value);

  if (isNaN(edad)) {
    mensaje.innerHTML = "⚠️ Por favor, ingresa una edad válida.";
  } else if (edad >= 16) {
    mensaje.innerHTML = "✅ Edad válida: Puedes votar. (Edad: " + edad + ")";
  } else {
    mensaje.innerHTML = "🚫 Edad no válida: No puedes votar. (Edad: " + edad + ")";
  }
}