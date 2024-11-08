const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

const form = document.querySelector("form");

function validateInput(input, message) {
  if (!input.checkValidity()) {
    input.setCustomValidity(message);
  } else {
    input.setCustomValidity("");
  }
  input.reportValidity();
}

// Validate on focus out
firstName.addEventListener("focusout", () => {
  validateInput(
    firstName,
    "Please enter a name between 1 and 20 characters long."
  );
});

lastName.addEventListener("focusout", () => {
  validateInput(
    lastName,
    "Please enter a name between 1 and 25 characters long."
  );
});

email.addEventListener("focusout", () => {
  validateInput(email, "Please enter a valid email.");
});

phoneNumber.addEventListener("focusout", () => {
  validateInput(
    phoneNumber,
    "Please enter a phone number in the format XXX-XXX-XXXX."
  );
});

password.addEventListener("focusout", () => {
  validateInput(password, "Password must be at least 5 characters.");
});

confirmPassword.addEventListener("focusout", () => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("Passwords do not match.");
  } else {
    confirmPassword.setCustomValidity("");
  }
  confirmPassword.reportValidity();
});

// Clear error on input
[firstName, lastName, email, phoneNumber, password, confirmPassword].forEach(
  (input) => {
    input.addEventListener("input", () => {
      input.setCustomValidity("");
      input.reportValidity();
    });
  }
);

// Form submit validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
  } else {
    alert("Form submitted successfully!");
  }
});
