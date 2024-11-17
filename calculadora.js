class Calculadora {
    Suma(a, b) {
        return a + b; 
    }

    Resta(a, b) {
        return a - b; 
    }

    Producto(a, b) {
        return a * b; 
    }

    Division(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b; 
    }
}

export default Calculadora;  // Exportación correcta de la clase
