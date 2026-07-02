
alert("esto se llama desde un archivo externo");

alert("¡Hola mundo de IDAI!");

function calcularTotal() {

    // Variables
    var total = 0;
    var minutos = parseInt(document.getElementById("minutos").value);

    // Costo por minutos
    total = minutos * 10;

    // Plan
    if (document.getElementById("telefono").checked) {
        total = total + 100;
    }

    if (document.getElementById("internet").checked) {
        total = total + 200;
    }

    if (document.getElementById("tv").checked) {
        total = total + 300;
    }

    // Servicios adicionales
    if (document.getElementById("antivirus").checked) {
        total = total + 50;
    }

    if (document.getElementById("nube").checked) {
        total = total + 150;
    }

    if (document.getElementById("web").checked) {
        total = total + 250;
    }

    // Mostrar resultado
    document.getElementById("total").value = "$" + total.toFixed(2);

    // Alert
    alert("El total a pagar es: $" + total.toFixed(2) + " MXN");
}