let num1 = 4;
let num2 = 7;
let operacion;

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir entre cero";
        }
        return num1 / num2;
    } else {
        return "Operación no válida";
    }
}

while (true) {
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:");

    // Condición de salida
    if (operacion === "salir") {
        alert("Gracias por usar la calculadora. ¡Hasta pronto!");
        break;
    }

    // Mostramos el resultado
    let resultado = realizarOperacion(num1, num2, operacion);
    alert("Resultado: " + resultado);
}
