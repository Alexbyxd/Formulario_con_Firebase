document.getElementById('formulario').addEventListener(('submit'), (event) =>{
    event.preventDefault()//Suprime que el formulario se ponga en blanco cada vez que lo apretamos

    //VAlidar campo nombre
    let entradaNombre =  document.getElementById('name')
    let errorNombre =  document.getElementById('nameError')

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introduce el nombre'
        errorNombre.classList.add('error-message');
    }else{
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    }

    //Validar correo electronico
    let emailEntrada = document.getElementById('email')
    let emailError =  document.getElementById('emailError')
    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent = 'Por favor, introduce un e-mail valido'
        emailError.classList.add('error-message')
    }else{
        emailError.textContent = '';
        emailError.classList.remove('error-message');
    }

    //validar contraseña
    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    let contrasenaPattner = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

    if (!contrasenaPattner.test(contrasenaEntrada.value)) {
        contrasenaError.textContent = "Por favor, debe tener menos de 8 caracteres, debe incluir numeros, mayusculas, minusculas y caracteres especiales";
        contrasenaError.classList.add("error-message");
    }else{
        contrasenaError.textContent =
          '';
        contrasenaError.classList.remove("error-message");
    }

    //Si todos los campos son validos

    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){

        //BACKEND
        
        alert('El formulario se ha enviado con exito')
        document.getElementById("formulario").reset();
    }
})