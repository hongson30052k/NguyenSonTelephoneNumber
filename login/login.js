var data;
document.querySelector(".form-submit").addEventListener("click", function (e) {
  e.preventDefault();
  var username = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;
  var confirmPassword = document.getElementById("exampleInputConfirmPassword1");
  var emailHelp = document.querySelectorAll("#emailHelp");
  var a;
  var b;
  var c;
  console.log(emailHelp);
  if (password === "") {
    emailHelp[1].innerHTML = "Password is required";
    emailHelp[1].style.color = "red";
  }
  if (confirmPassword.value != password) {
    emailHelp[2].innerHTML = "Password does not match";
    emailHelp[2].style.color = "red";
  } else {
    c = true;
    emailHelp[2].innerHTML = "";
  }
  if (username.length >= 0 && username.length < 5) {
    emailHelp[0].innerHTML = "Username must be at least 5 characters";
    emailHelp[0].style.color = "red";
  } else {
    emailHelp[0].innerHTML = "";
    a = true;
  }
  if (password.length >= 0 && password.length < 5) {
    emailHelp[1].innerHTML = "Password must be at least 5 characters";
    emailHelp[1].style.color = "red";
  } else {
    emailHelp[1].innerHTML = "";
    b = true;
  }

  if (a && b && c) {
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
    window.location.href = "../login1/login1.html";
  }
});
