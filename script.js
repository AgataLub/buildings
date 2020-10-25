fetchProducts();

function fetchProducts() {
console.log("fetchProducts");
    fetch("https://agataswistak.com/wordpress/wp-json/wp/v2/building")
        .then(function (response) {
            console.log(response)
            return response.json();
        })

        .then(function (data) {
            console.log(data)
            dataReceived(data);
        })

}

function dataReceived(product) {
    product.forEach(showProduct)
}

function showProduct(myProduct) {
    console.log(myProduct)

    const temp = document.querySelector("#productTemplate").content;
    const myCopy = temp.cloneNode(true);
    const img = myCopy.querySelector(".productImage");

    img.setAttribute('src', myProduct.picture[0].guid);

    myCopy.querySelector(".address_street").innerHTML = myProduct.address_street;
    myCopy.querySelector(".address_city").textContent = myProduct.address_city;

    myCopy.querySelector(".beds").textContent = myProduct.beds;
    myCopy.querySelector(".baths").innerHTML = myProduct.baths;
    myCopy.querySelector(".sq_feet").innerHTML = myProduct.sq_feet;

     if (myProduct.new > 0) {
        myCopy.querySelector(".fresh").textContent = "12 HRS";
        myCopy.querySelector(".fresh").classList.add("fresh_style");
    } else {
        myCopy.querySelector(".fresh").classList.add("display_none");
    }


    const parentElem = document.querySelector("section");
    parentElem.appendChild(myCopy);
}
