const validation = (state) => {
        let errors = {}
        //     EMAIL
        // el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
        // el nombre de usuario no puede estar vacío.
        // el nombre de usuario no puede tener más de 35 caracteres.
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i;
    
        if(state.email.length > 35 || state.email.length === 0) {
            errors.email = "Email must have 1-35 characters"
        } else if(!regexEmail.test(state.email)) {
            errors.email = "Invalid email" 
        }
    
        // PASSWORD
        // la contraseña tiene que tener al menos un número.
        // la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;
        if (state.password.length < 6 || state.password.length > 10) {
            errors.password = "Password must have 6-10 characters";
        } else if (!regexPassword.test(state.password)) {
            errors.password = "Invalid password";
        } else if (!/\d/.test(state.password)) {
            errors.password = "Password must contain at least one number";
        }
        
        return errors
    }

    export default validation;