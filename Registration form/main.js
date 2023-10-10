function formSubmitHandler() {
  // grab inputs
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  // validation logic
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity("The passwords don't match!");
    confirmPasswordInput.reportValidity();
    return;
  }
  // handle valid inputs ...
}
