/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: FR
 */
jQuery.extend(jQuery.validator.messages, {
        required: "Este campo es requerido",
        remote: "Porfavor corrije el valor de este campoPlease fix this field.",
        email: "Ingresa una dirección de correo válida.",
        url: "Ingresa una URL válida.",
        date: "Ingresa una fecha válida.",
        dateISO: "Ingresa una fehca válida (ISO).",
        number: "Ingresa un número válido.",
        digits: "Ingresa sólo letras.",
        creditcard: "Ingresa un número de tarjeta de crédito válido.",
        equalTo: "Ingresa el nuevo valor de nuevo.",
        accept: "Ingresa un valor con extensión válida.",
        maxlength: $.validator.format("Porfavor ingresa menos de {0} caractéres."),
        minlength: $.validator.format("Porfavor ingresa almenos {0} caractéres."),
        rangelength: $.validator.format("Porfavor ingresa un valor entre {0} y {1} caractéres de longitud."),
        range: $.validator.format("Ingresa un valor entre {0} y {1}."),
        max: $.validator.format("Ingresa un valor menor o igual que {0}."),
        min: $.validator.format("Ingresa un valor mayor o igual a {0}.")
});