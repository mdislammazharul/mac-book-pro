// price function
function price(product, price) {
    const customProductPrice = document.getElementById('extra-' + product);
    customProductPrice.innerText = price;
    totalPrice();
}
// current cost
function currentCost(product) {
    const productCostText = document.getElementById('extra-' + product).innerText;
    const productCostValue = parseInt(productCostText);
    return productCostValue;
}
// total price
function totalPrice() {
    const totalCost = document.getElementById('total-cost');
    const promoCost = document.getElementById('promo-cost');
    const totalPrice = currentCost('memory') + currentCost('storage') + currentCost('delivery') + 1299;
    totalCost.innerText = totalPrice;
    promoCost.innerText = totalPrice;
}
// promo code matching
function promoCodeMatching() {
    const promoText = document.getElementById('promo-code')
    const promoTextValue = promoText.value;
    if (promoTextValue.toLowerCase() == 'stevekaku') {
        promoText.value = '';
        const promoCost = document.getElementById('promo-cost');
        const promoCostValue = parseInt(promoCost.innerText);
        const promoValue = promoCostValue * .8;
        promoCost.innerText = promoValue;

    }
    else {
        totalPrice();
    }
}

// best price ID
document.getElementById('memory-8GB').addEventListener('click', function () {
    price('memory', 0);
})
document.getElementById('storage-256GB').addEventListener('click', function () {
    price('storage', 0);
})
document.getElementById('friday-25').addEventListener('click', function () {
    price('delivery', 0);
})

// customized price ID & Cost
document.getElementById('memory-16GB').addEventListener('click', function () {
    price('memory', 180);
})
document.getElementById('storage-512GB').addEventListener('click', function () {
    price('storage', 100);
})
document.getElementById('storage-1TB').addEventListener('click', function () {
    price('storage', 180);
})
document.getElementById('friday-21').addEventListener('click', function () {
    price('delivery', 20);
})
document.getElementById('promo-button').addEventListener('click', function () {
    promoCodeMatching();
})
