const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
  e.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const cpass = document.getElementById("cpass").value;

  localStorage.setItem("FirstName", fname);
  localStorage.setItem("LastName", lname);
  localStorage.setItem("Email", email);
  localStorage.setItem("Password", pass);
  localStorage.setItem("Cpassword", cpass);
  if (fname == "" && lname == "" && email == "" && pass == "" && cpass == "") {
    Swal.fire({
      title: "Upps..!",
      text: "Faltaron areas por completar!",
      confirmButtonText: "Aceptar",
      customClass: {
        confirmButton: "pop-button",
      },
    });
  } else {
    if (pass.length >= 6 && pass.length <= 20) {
      if (pass !== cpass) {
        Swal.fire({
          title: "Upps..!",
          text: "La contraseña no coincide!",
          confirmButtonText: "Aceptar",
          customClass: {
            confirmButton: "pop-button",
          },
        });
      } else {
        Swal.fire({
          title: "Buen trabajo!",
          text: "Registro exitoso!",
          showConfirmButton: false,
          icon: 'success',
        });
        setTimeout(() => {
          location.href = "index.html";
        }, 3000);
      }
    } else {
      Swal.fire({
        title: "Upps..!",
        text: "Contraseña mínima de seis dígitos!",
        confirmButtonText: "Aceptar",
        customClass: {
          confirmButton: "pop-button",
        },
      });
    }
  }
};
