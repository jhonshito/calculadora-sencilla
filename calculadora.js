

let resultado = document.getElementById('resultado');
let numeroUno = document.getElementById('numeroUno');
let operador = document.getElementById('operador');
let numeroDos = document.getElementById('numeroDos');
let boton = document.getElementById('boton');
let alerta = document.getElementById('alerta');

boton.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log('siiiiiiiiuuuu')

    if (operador.value == "+") {
        resultado.textContent = parseInt(numeroUno.value) + parseInt(numeroDos.value);
        // console.log(parseInt(numeroUno.value));
        // console.log(numeroDos.value);
        // console.log(typeof(operador.value));
    }
    
    if (operador.value == "-") {
        resultado.textContent = (parseInt(numeroUno.value) - parseInt(numeroDos.value));
    }

    if (operador.value == "*") {
        resultado.textContent = parseInt(numeroUno.value) * parseInt(numeroDos.value);
    }

    if (operador.value == "/") {
        resultado.textContent = parseInt(numeroUno.value) / parseInt(numeroDos.value);
    }

    if (parseInt(operador.value) != "+" || parseInt(operador.value) != "-" || parseInt(operador.value) != "*" || parseInt(operador.value) != "/") {
        // alerta.classList.add('d-none')
        alerta.classList.remove('d-none')

    }

    // console.log(typeof(numeroUno))
})

