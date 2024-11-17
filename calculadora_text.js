// Importar assert desde Chai
import { assert } from "chai"; // Usamos una importación con llaves
import Calculadora from './calculadora.js'; // Importamos la clase Calculadora

// Crear una instancia de la clase Calculadora
const calculadora = new Calculadora();

describe('Prueba unitaria: ', function() {
  describe('Verificando la función Suma', function() {

    it('Debe retornar la suma de 1 + 1 igual a 2', function() {
      const result = calculadora.Suma(1, 1);
      assert.equal(result, 2); // Comprobamos que el resultado sea 2
    });

    it('Debe retornar la suma de 5 + 3 igual a 8', function() {
      const result = calculadora.Suma(5, 3);
      assert.equal(result, 10); // Comprobamos que el resultado sea 8
    });
  });
});
