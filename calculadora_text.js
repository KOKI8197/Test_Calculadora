// Importar assert desde Chai
import { assert } from "chai"; // Usamos una importación con llaves
import Calculadora from './calculadora.js'; // Importamos la clase Calculadora

// Crear una instancia de la clase Calculadora
const calculadora = new Calculadora();

describe('Prueba unitaria: ', function() {
  describe('Verificando la función Suma', function() {

    it('Verificando Suma', function() {
      const result = calculadora.Suma(3, 2);
      assert.equal(result, 5); // Comprobamos que el resultado sea 2
    });
  });
});