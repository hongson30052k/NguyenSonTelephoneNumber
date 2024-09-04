var api = "https://66a7bcd853c13f22a3d0e5b4.mockapi.io/products";
function getApi() {
  fetch(api)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var renderProduct = document.querySelector(".renderProduct");
      for (var i = 0; i < data.length; i++) {
        renderProduct.innerHTML += `
        <div class="card col-3">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text">${data[i].info}</p>
            <p class="card-text">${data[i].price}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`;
      }
    });
}

getApi();
