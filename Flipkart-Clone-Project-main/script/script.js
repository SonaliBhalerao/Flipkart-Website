// frontdrop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let lowtohigh = document.querySelector("#l2h");
let hightolow = document.querySelector("#h2l");
lowtohigh.onclick = () => {
  sona.sort(function (a, b) {
    if (b.price.extracted == undefined || a.price.extracted == undefined) {
      return;
    } else {
      return a.price.extracted - b.price.extracted;
    }
  });
  showdata(sona);
  console.log(sona);
};
hightolow.onclick = () => {
  sona.sort(function (a, b) {
    if (b.price.extracted == undefined || a.price.extracted == undefined) {
      return;
    } else {
      return b.price.extracted - a.price.extracted;
    }
  });
  showdata(sona);
  console.log(sona);
};

let desc = [];

let refridata = JSON.parse(localStorage.getItem("inverter"));

let sona = refridata[0].organic_results;
console.log(sona);

// console.log(arrayOfPureData);

var productContainer = document.getElementById("productdiv");

showdata(sona);

function showdata(sona) {
  productContainer.innerHTML = null;
  sona.forEach((elem) => {
    if (elem.returns == undefined || elem.price.extracted == undefined) {
      return;
    }
    //         console.log(elem.title)
    // ///////////////////  Div Main  ////////////////////////
    let divMain = document.createElement("div");
    divMain.setAttribute("id", "divMain");

    /********************************************Changes********************************************************** */
    divMain.addEventListener("click", () => {
      desc.push(elem);
      // console.log(ClickData);
      // window.location.href = "product.html";
      localStorage.setItem("description", JSON.stringify(desc));
      window.location.href = "../pages/des2.html";
    });

    /********************************************Changes********************************************************** */

    // ///////////////////  Div Main  ////////////////////////
    // let div1 = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("id", "product_img");
    img.src = elem.thumbnail;

    // ///////////////////  Div 2 ////////////////////////
    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");

    let title = document.createElement("h2");
    title.innerText = elem.title;

    let ul = document.createElement("ul");
    ul.setAttribute("id", "ul");

    // let reviews = document.createElement("li")
    // reviews.innerText = elem.extensions;

    let condition = document.createElement("li");
    condition.innerText = elem.condition;

    let shipping = document.createElement("li");
    shipping.innerText = elem.shipping;

    let subtitle = document.createElement("li");
    subtitle.innerText = elem.returns;

    // let returns = document.createElement("li")
    // returns.innerText = elem.returns;

    ul.append(condition, shipping, subtitle);
    // ///////////////////  Div 3 ////////////////////////
    let div3 = document.createElement("div");
    div3.style.display = "flex";
    div3.setAttribute("id", "div3");

    let price = document.createElement("h2");
    // console.log(price);
    price.innerText = "₹" + Math.floor(elem.price.extracted * 71);

    let assured = document.createElement("img");
    assured.src =
      "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    assured.style.height = "30px";
    assured.style.marginLeft = "40px";
    // ₹42,94
    let div4 = document.createElement("div");
    div4.append(shipping);
    div4.style.marginLeft = "30%";
    div2.append(title, ul);
    div3.append(price, assured);
    let div5 = document.createElement("div5");
    div5.append(div3, div4);
    divMain.append(img, div2, div5);

    // p1, p3, p4, p5
    productContainer.append(divMain);
  });
}

// searchfunction>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function search() {
  var searchText = document.querySelector("#searchbar").value;
  console.log(searchText);
  var filterdata = sona.filter(function (item) {
    return item.title.includes(searchText);
  });
  console.log(filterdata);
  showdata(filterdata);
}
