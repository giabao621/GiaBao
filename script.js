  const form = document.getElementById("email-form");
  const emailInput = document.getElementById("email-input");
  const emailError = document.getElementById("email-error");
  const personalDetails = document.getElementById("personal-details");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (emailInput.checkValidity()) {
      personalDetails.hidden = false;
      emailError.textContent = "";
    } else {
      personalDetails.hidden = true;
      emailError.textContent = "Vui lòng nhập email đúng định dạng!";
    }
  });