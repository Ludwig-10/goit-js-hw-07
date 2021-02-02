const validInput = document.querySelector("#validation-input");

function onInputBlur() {
  if (validInput.value.length === 6) {
    validInput.classList.remove("invalid");
    validInput.classList.add("valid");
  } else {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
  }
}

validInput.addEventListener("blur", () => {
    validInput.value
    ? onInputBlur()
    : validInput.classList.remove("invalid", "valid");
});