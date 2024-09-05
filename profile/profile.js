var api = "https://66a7bcd853c13f22a3d0e5b4.mockapi.io/products";

function getApi() {
  fetch(api)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var tbody = document.querySelector("tbody");
      for (var i = 0; i < data.length; i++) {
        tbody.innerHTML += `
        <tr>
          <th scope="row">${data[i].id}</th>
          <td>${data[i].name}</td>
          <td>${data[i].price}</td>
          <td>${data[i].ratingStar}</td>
          <td>${data[i].info}</td>
          <td><button type="button" class="btn btn-warning edit" onclick="edit(${data[i].id})">Edit</button></td>
          <td><button type="button" class="btn btn-danger delete" onclick="deleteProduct(${data[i].id})">Delete</button></td>
        </tr>
        `;
      }
    });
}

document.querySelector(".btn-add").addEventListener("click", function () {
  document.querySelector(".modal-add").style.display = "block";
  var close = document.querySelectorAll(".close");
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      document.querySelector(".modal-add").style.display = "none";
    });
  }
  document.querySelector(".save").addEventListener("click", function () {
    document.querySelector(".modal").style.display = "none";
    var name = document.querySelector("#useName").value;
    var price = document.querySelector("#Price").value;
    var ratingStar = document.querySelector("#RatingStar").value;
    var info = document.querySelector("#Infor").value;
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        ratingStar: ratingStar,
        info: info,
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        window.location.reload();
      });
  });
});

function edit(id) {
  document.querySelector(".modal-add").style.display = "block";
  var close = document.querySelectorAll(".close");
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      document.querySelector(".modal-add").style.display = "none";
    });
  }
  var apiId = "https://66a7bcd853c13f22a3d0e5b4.mockapi.io/products/" + id;
  fetch(apiId)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      document.querySelector("#useName").value = data.name;
      document.querySelector("#Price").value = data.price;
      document.querySelector("#RatingStar").value = data.ratingStar;
      document.querySelector("#Infor").value = data.info;
    });

  document.querySelector(".save").addEventListener("click", function () {
    document.querySelector(".modal").style.display = "none";
    var name = document.querySelector("#useName").value;
    var price = document.querySelector("#Price").value;
    var ratingStar = document.querySelector("#RatingStar").value;
    var info = document.querySelector("#Infor").value;
    console.log(name, price, ratingStar, info);
    fetch(apiId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        ratingStar: ratingStar,
        info: info,
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        window.location.reload();
      });
  });
}

function deleteProduct(id) {
  var apiId = "https://66a7bcd853c13f22a3d0e5b4.mockapi.io/products/" + id;
  fetch(apiId, {
    method: "DELETE",
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      window.location.reload();
    });
}
document.querySelector(".success").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".modal12").style.display = "block";
  document.querySelector(".yes").onclick = function () {
    window.location.href = "../index.html";
  };
  document.querySelector(".no").onclick = function () {
    document.querySelector(".modal12").style.display = "none";
  };
});
getApi();
