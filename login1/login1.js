var a = window.localStorage.getItem("username");
var b = window.localStorage.getItem("password");
var e = false;
var d = false;
document.querySelector(".form1").addEventListener("click", function (e) {
  e.preventDefault();
  var username = document.getElementById("exampleInputEmail12").value;
  var password = document.getElementById("exampleInputPassword12").value;
  var emailHelp = document.querySelectorAll("#emailHelp");
  if (username != a) {
    emailHelp[0].innerHTML = "Username does not match";
    emailHelp[0].style.color = "red";
  } else {
    emailHelp[0].innerHTML = "";
    e = true;
  }
  if (password != b) {
    emailHelp[1].innerHTML = "Password does not match";
    emailHelp[1].style.color = "red";
  } else {
    emailHelp[1].innerHTML = "";
    d = true;
  }
  if (e == true && d == true) {
    window.location.href = "../profile/profile.html";
  }
});
