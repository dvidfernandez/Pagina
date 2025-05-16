document.addEventListener('DOMContentLoaded', function() {
    // Toggle para mostrar/ocultar contraseña (funciona en ambas páginas)
    document.querySelectorAll('.toggle-password').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            if (input.type === 'password') {
                input.type = 'text';
                this.textContent = '🙈';
            } else {
                input.type = 'password';
                this.textContent = '👁️';
            }
        });
    });

    // Validación del formulario de REGISTRO
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password.length < 8) {
                alert('La contraseña debe tener al menos 8 caracteres');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            
            alert('¡Registro exitoso! Redirigiendo al login...');
            window.location.href = 'index.html'; // Redirige al login después del registro
        });
    }

    // Validación del formulario de LOGIN (simulación)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Inicio de sesión simulado correctamente');
        });
    }
});