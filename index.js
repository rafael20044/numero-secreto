var numeroSecreto = 0;
var intentos = 1;

generarNumero();

function generarTexto(id, texto) {
    let etiqueta = document.getElementById(id);
    etiqueta.textContent = texto;
}

function generarNumero() {
    let numero = 0;
    do {
        numero = Math.floor(Math.random()*10)+1;
    } while (numero == numeroSecreto);
    numeroSecreto = numero;
}

function verificar() {
    let input = document.getElementById("input").value;
    let boton = document.getElementById("boton");
    if (intentos < 5) {
        if (input == numeroSecreto) {
            generarTexto("info", "Ganaste");
            boton.removeAttribute("disabled");
        }else{
            intentos++;
            generarTexto("intentos", `intentos: ${intentos}/5`);
            if (input > numeroSecreto) {
                generarTexto("info", "el numero debe de ser menor");
            }else{
                generarTexto("info", "El numero debe de ser mayor");
            }
        }
    }else{
        generarTexto("info", "Perdiste");
        boton.removeAttribute("disabled");
    }
}

function reiniciar() {
    document.getElementById("input").value = "";
    document.getElementById("boton").setAttribute("disabled", "true");
    intentos = 1;
    generarNumero();
    generarTexto("intentos", `intentos: ${intentos}/5`);
    generarTexto("info", "");
}