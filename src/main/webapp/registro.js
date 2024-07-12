/*Método para validar formulario de registro*/

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var nombre_error = document.getElementById("nombreError");
    var apellido_error = document.getElementById("apellidoError");
    var email_error = document.getElementById("emailError");
    var contrasena_error = document.getElementById("contrasenaError");
    var fechanac_error = document.getElementById("fechanacError");
    var paisreg_error = document.getElementById("paisregError");
    var terminos_error = document.getElementById("terminosError");

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("email");
        var contrasena = document.getElementById("contrasena");
        var fechanac = document.getElementById("fechanac");
        var paisreg = document.getElementById("paisreg");
        var acepterminos = document.getElementById("acepterminos");

        var nombreValido = nombre.value !== '';
        var apellidoValido = apellido.value !== '';
        var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
        var contrasenaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,100}$/.test(contrasena.value);
        var fechanacValida = /^\d{4}-\d{2}-\d{2}$/.test(fechanac.value);
        var paisregValido = paisreg.value !== '';
        var terminosValidos = acepterminos.checked;

        if (nombreValido && apellidoValido && emailValido && contrasenaValida && fechanacValida && paisregValido && terminosValidos) {
            window.location.href = 'registroexitoso.html';
            form.reset();
        } else {
            nombre_error.textContent = nombreValido ? '' : 'Por favor, ingresa tu nombre.';
            nombre_error.style.color = nombreValido ? 'green' : 'red';
            apellido_error.textContent = apellidoValido ? '' : 'Por favor, ingresa tu apellido.';
            apellido_error.style.color = apellidoValido ? 'green' : 'red';
            email_error.textContent = emailValido ? '' : 'Por favor, ingresá un email válido.';
            email_error.style.color = emailValido ? 'green' : 'red';
            contrasena_error.textContent = contrasenaValida ? '' : 'La contraseña debe tener al menos 8 caracteres, números, mayúsculas, minúsculas y caracteres especiales.';
            contrasena_error.style.color = contrasenaValida ? 'green' : 'red';
            fechanac_error.textContent = fechanacValida ? '' : 'Por favor, ingresa tu fecha de nacimiento.';
            fechanac_error.style.color = fechanacValida ? 'green' : 'red';
            paisreg_error.textContent = paisregValido ? '' : 'Por favor, selecciona tu país.';
            paisreg_error.style.color = paisregValido ? 'green' : 'red';
            terminos_error.textContent = terminosValidos ? '' : 'Debes aceptar los términos y condiciones.';
            terminos_error.style.color = terminosValidos ? 'green' : 'red';
        }
    });
});