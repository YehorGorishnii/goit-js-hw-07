const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {};

  for (const input of this.elements) {
    if (input.nodeName === "INPUT" && input.type !== "submit") {
      const trimmedValue = input.value.trim();
      formData[input.name] = trimmedValue;
    }
  }

  const isFormValid = Object.values(formData).every((value) => value !== "");

  if (!isFormValid) {
    alert("All form fields must be filled in");
  } else {
    console.log(formData);
    this.reset();
  }
});
