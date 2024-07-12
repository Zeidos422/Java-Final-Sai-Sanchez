/*Método para validar formulario de login*/

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var pochoadmin = "Pochocleras.codoacodo@mail.com";
    var pochopass = "Pochocleras-pelis!";
    var user_error = document.getElementById("userError");
    var pass_error = document.getElementById("passError");

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username == pochoadmin && password == pochopass) {
            window.location.href = 'backend.html';
        } else {
            if (username == '') {
                user_error.textContent = 'Por favor ingrese su usuario.';
                user_error.style.color = "red";
            } else {
                user_error.textContent = 'Usuario inexistente.';
                user_error.style.color = "red";
            }
            if (password == '') {
                pass_error.textContent = 'Por favor ingrese su contraseña.';
                pass_error.style.color = "red";
            } else {
                pass_error.textContent = 'Contraseña invalida.';
                pass_error.style.color = "red";
            }
        }
    });
});