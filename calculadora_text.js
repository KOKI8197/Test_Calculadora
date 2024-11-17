// test.js

// Importar la clase Calculadora
import Calculadora from './calculadora.js';

// Crear una instancia de la clase Calculadora
const calculadora = new Calculadora();

// Pruebas de las operaciones
console.log("Suma de 5 + 3:", calculadora.Suma(5, 3)); // Esperado: 8
console.log("Resta de 5 - 3:", calculadora.Resta(5, 3)); // Esperado: 2
console.log("Producto de 5 * 3:", calculadora.Producto(5, 3)); // Esperado: 15
console.log("División de 6 / 3:", calculadora.Division(6, 3)); // Esperado: 2

// Prueba de la división por cero (debe arrojar un error)
try {
  console.log("División de 5 / 0:", calculadora.division(5, 0)); 
} catch (e) {
  console.log("Error en división:", e.message); // Esperado: "No se puede dividir entre cero"
}
