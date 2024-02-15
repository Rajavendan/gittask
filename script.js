
function validateForm() {
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var age = document.getElementById("age").value;
  var country = document.getElementById("country").value;
  var terms = document.getElementById("terms").checked;
  
  var fullnameError = document.getElementById("fullname-error");
  var emailError = document.getElementById("email-error");
  var genderError = document.getElementById("gender-error");
  var ageError = document.getElementById("age-error");
  var countryError = document.getElementById("country-error");
  var termsError = document.getElementById("terms-error");
  
  fullnameError.innerHTML = "";
  emailError.innerHTML = "";
  genderError.innerHTML = "";
  ageError.innerHTML = "";
  countryError.innerHTML = "";
  termsError.innerHTML = "";

  var valid = true;

  if (fullname.trim() === "") {
    fullnameError.innerHTML = "Please enter your full name";
    valid = false;
  }

  if (email.trim() === "") {
    emailError.innerHTML = "Please enter your email address";
    valid = false;
  } else if (!validateEmail(email)) {
    emailError.innerHTML = "Please enter a valid email address";
    valid = false;
  }

  if (!gender) {
    genderError.innerHTML = "Please select your gender";
    valid = false;
  }

  if (age.trim() === "") {
    ageError.innerHTML = "Please enter your age";
    valid = false;
  }

  if (country === "") {
    countryError.innerHTML = "Please select your country";
    valid = false;
  }

  if (!terms) {
    termsError.innerHTML = "You must agree to the terms and conditions";
    valid = false;
  }

  return valid;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
