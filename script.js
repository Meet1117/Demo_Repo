const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// Show / hide password toggle
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const eyeIcon = togglePassword.querySelector(".icon-eye");
const eyeSlashIcon = togglePassword.querySelector(".icon-eye-slash");

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  eyeIcon.classList.toggle("d-none", isHidden);
  eyeSlashIcon.classList.toggle("d-none", !isHidden);
  togglePassword.setAttribute(
    "aria-label",
    isHidden ? "Hide password" : "Show password"
  );
});

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
