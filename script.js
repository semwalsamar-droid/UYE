function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    alert("Welcome to UYE Admin Dashboard!");
  } else {
    alert("Invalid credentials");
  }
}