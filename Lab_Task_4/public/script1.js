
function validateForm() {
  let isValid = true;

  // Clear any previous error messages
  document.getElementById('emailError').style.display = 'none';
  document.getElementById('passwordError').style.display = 'none';

  // Get form data
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validate email
  if (email === "") {
    document.getElementById('emailError').textContent = "Please enter your email or phone.";
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById('emailError').textContent = "Please enter a valid email address.";
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
  }

  // Validate password
  if (password === "") {
    document.getElementById('passwordError').textContent = "Please enter your password.";
    document.getElementById('passwordError').style.display = 'block';
    isValid = false;
  }

  return isValid;
}

function validateEmail(email) {
  // Basic email validation regex
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}
