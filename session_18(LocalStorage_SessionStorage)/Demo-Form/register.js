const USERNAME = "username";
const PASSWORD = "password";

let emailField = document.getElementById("email");
let passwordField = document.getElementById("password");
let confirmPasswordField = document.getElementById("confirmPassword");
let submitRegisBtn = document.getElementById("SubmitRegis");

submitRegisBtn.addEventListener("click", function () {
  // kiem tra su hop le cua email
  if (emailField.value == "") {
    console.log("email khong duoc bo trong");
  } else if (emailField.value.length < 6) {
    console.log("email can lon hon hoac bang 6 ky tu");
  } else if (emailField.value.length > 32) {
    console.log("email can nho hon hoac bang 32 ky tu");
  } else {
    console.log("email ok");
  }

  // kiem tra su hop le cua password
  if (passwordField.value == "") {
    console.log("password khong duoc bo trong");
  } else {
    console.log("password ok");
  }

  // kiem tra su trung khop cua password
  if (confirmPasswordField.value == "") {
    console.log("confirmPasswordField khong duoc bo trong");
  } else if (passwordField.value != confirmPasswordField.value) {
    console.log("mat khau khong trung khop");
  } else {
    console.log("confirm password ok");
  }

  let username = localStorage.getItem(USERNAME);
  if (username != emailField.value) {
    localStorage.setItem(USERNAME, emailField.value);
    localStorage.setItem(PASSWORD, passwordField.value);

    window.location.href = "./login.html";
  } else {
    console.log("tai khoan da ton tai");
  }
});

if (getCookie("isRemember")) {
  window.location.href = "./index.html";
}

function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  return cookie[cookieName];
}
