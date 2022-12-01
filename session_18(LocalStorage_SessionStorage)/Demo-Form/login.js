const USERNAME = "username";
const PASSWORD = "password";

let emailField = document.getElementById("email");
let passwordField = document.getElementById("password");
let submitLoginField = document.getElementById("loginBth");
let remember = document.getElementById("remember_me");

submitLoginField.addEventListener("click", () => {
  // kiem tra su hop le cua email
  if (emailField.value == "") {
    console.warn("email khong duoc bo trong");
  } else if (emailField.value.length < 6) {
    console.warn("email can lon hon hoac bang 6 ky tu");
  } else if (emailField.value.length > 32) {
    console.error("email can nho hon hoac bang 32 ky tu");
  } else {
    console.log("email ok");
  }

  // kiem tra su hop le cua password
  if (passwordField.value == "") {
    console.warn("password khong duoc bo trong");
  } else {
    console.log("password ok");
  }

  let username = localStorage.getItem(USERNAME);
  let password = localStorage.getItem(PASSWORD);

  if (username == emailField.value && password == passwordField.value) {
    // console.log("vung oi mo ra");

    if (remember.checked) {
      // Lay ra thoi gian sau 24 gio
      var currentDateObj = new Date();
      var numberOfMlSeconds = currentDateObj.getTime();
      var date24 = new Date(numberOfMlSeconds + 24 * 60 * 60 * 1000);

      document.cookie = "isRemember=true; expires=" + date24;
    }

    window.location.href = "./index.html";
  } else {
    console.log("chuc ban may man lan sau");
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
