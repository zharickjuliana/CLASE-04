function realizarOperación(operación) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // validar entrada de números
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("result").innerText = "por favor, ingrese números válidos"
        return;
    }
let resultado;
if (operación === "suma"){
       resultado = numn1 + num2;
    } else if (operación === "resta"){
       resultado = num1 - num2;
    } else if (operación === "multiplicación"){
       resultado = num1 * num2;      
    } else if (operación === "división"){
       if (num2 === 0) {
        resultado =" error: no se puede dividir entre cero.";
     } else {
        resultado = num1 / num2;
     }
} else {
    resultado = "Error: operación no válida.";
}


// Mostrar resultado
document.getElementById("result").innerText = "Resultado: " + resultado; 
}