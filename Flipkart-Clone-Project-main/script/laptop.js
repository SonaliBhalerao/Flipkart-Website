var pureData = JSON.parse(localStorage.getItem("laptop"));

var clickData = [];

var arrayOfPureData = pureData[0].organic_results;
console.log(arrayOfPureData);

var productContainer = document.getElementById("productContainer");

arrayOfPureData.forEach((elem) => {
  if (elem.price == undefined || elem.price == undefined) {
    return;
  } else {
    // ///////////////////  Div Main  ////////////////////////
    let divMain = document.createElement("div");
    divMain.setAttribute("id", "divMain");
    divMain.addEventListener("click", () => {
      viewpage(elem);
    });

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

    let reviews = document.createElement("li");
    reviews.innerText = elem.reviews;

    let condition = document.createElement("li");
    condition.innerText = elem.condition;

    let shipping = document.createElement("li");
    shipping.innerText = elem.shipping;

    let subtitle = document.createElement("li");
    subtitle.innerText = elem.subtitle;

    let returns = document.createElement("li");
    returns.innerText = elem.returns;

    ul.append(reviews, condition, shipping, subtitle, returns);
    // ///////////////////  Div 3 ////////////////////////
    let div3 = document.createElement("div");
    div3.style.display = "flex";
    div3.setAttribute("id", "div3");

    let price = document.createElement("h2");
    // console.log(price);
    price.innerText = "₹" + elem.price.extracted * 71;

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
  }
});

// reviews

// returns

// shipping
// subtitle
// condition

// https://www.flipkart.com/search?q=laptop&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off

function viewpage(p) {
  let clickData = JSON.parse(localStorage.getItem("viewData")) || [];
  clickData = [];
  clickData.push(p);
  localStorage.setItem("viewData", JSON.stringify(clickData));
  window.location.href = "des2.html";
}
