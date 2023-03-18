export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
  
    if (input.validity.valid) {
      input.parentElement.querySelector(".error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input_data");
      input.parentElement.querySelector(".error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
  }
  
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
  ];
  
  const mensajesDeError = {
    name: {
      valueMissing: "Por favor no dejes este campo vacío",
    },
    email: {
      valueMissing: "Por favor no dejes este campo vacío",
      typeMismatch: "Por favor ingresa un correo válido ",
    },
    asunto: {
      valueMissing: "Por favor no dejes este campo vacío",
    },
    msg: {
      valueMissing: "Por favor no dejes este campo vacíoo",
    },
  };
  
  const validadores = {
    nacimiento: (input) => validarNacimiento(input),
  };
  
  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }
