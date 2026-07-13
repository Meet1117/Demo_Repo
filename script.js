const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Reset validation state
  form.classList.remove("was-validated");
  message.textContent = "";

  // Native + custom validation
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  // Fake auth — replace with a real API call
  message.className = "text-center small mt-3 text-success";
  message.textContent = `Welcome, ${email.value}!`;

  console.log("Login attempt:", {
    email: email.value,
    password: password.value,
    remember: document.getElementById("remember").checked,
  });

  form.reset();
});
