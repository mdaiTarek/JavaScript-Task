var dresses = [{
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Striped Dress Image",
        url: "https://freepngimg.com/thumb/dress/33276-7-striped-dress-image-thumb.png",
        price: 2000
    },
    {
        name: "White shirt for men",
        url: "https://freepngimg.com/thumb/dress_shirt/10-2-dress-shirt-png-file-thumb.png",
        price: 1500
    },
    {
        name: "Black shirt for men",
        url: "https://freepngimg.com/thumb/dress_shirt/2-2-dress-shirt-png-clipart-thumb.png",
        price: 1000
    },
    {
        name: "Polo T-Shirt for men",
        url: "https://freepngimg.com/thumb/polo_shirt/6-2-polo-shirt-png-thumb.png",
        price: 750
    },
    {
        name: "Red Gown for girls",
        url: "https://freepngimg.com/thumb/dress/31618-6-dress-photo-thumb.png",
        price: 3000
    },
    {
        name: "Casual Shirt for men",
        url: "https://freepngimg.com/thumb/dress%20shirt/9-dress-shirt-png-image-thumb.png",
        price: 1200
    },
    {
        name: "Casual Shirt for men",
        url: "https://freepngimg.com/thumb/dress%20shirt/3-dress-shirt-png-image-thumb.png",
        price: 1450
    },
    {
        name: "T-shirt for men",
        url: "https://freepngimg.com/thumb/polo%20shirt/15-polo-shirt-png-image-thumb.png",
        price: 750
    },
    {
        name: "T-shirt for men",
        url: "https://freepngimg.com/thumb/polo%20shirt/21-polo-shirt-png-image-thumb.png",
        price: 750
    },
    {
        name: "Black Polo T-shirt for men",
        url: "https://freepngimg.com/thumb/polo%20shirt/29-black-polo-shirt-png-image-thumb.png",
        price: 1050
    },
    {
        name: "Mens Belt Brown",
        url: "https://freepngimg.com/thumb/belt/37367-5-mens-belt-file-thumb.png",
        price: 1250
    },
    {
        name: "Womens Belt Pink Transparent",
        url: "https://freepngimg.com/thumb/belt/37077-3-womens-belt-transparent-thumb.png",
        price: 1250
    }
];

var tempCart = [];


function gencard() {
    var newDiv;
    var id = 0;
    dresses.forEach(element => {
        newDiv = document.createElement('div');
        newDiv.setAttribute('id', id);
        newDiv.setAttribute('class', 'card');
        newDiv.setAttribute('onclick', 'addToCart(' + id + ')');
        newDiv.innerHTML = '<img class="product" src="' + element.url + '" alt="' + element.name + '""> <div class="container"><p>' + element.name + '</p></div>';
        document.getElementById('container-flex').appendChild(newDiv);
        id++;
    });
}

function addToCart(data) {
    let quantity = 1;

    if (localStorage.getItem(data) == null) {
        localStorage.setItem(data, quantity);
        var newDiv;
        newDiv = document.createElement('div');
        var id = 'c' + data;
        newDiv.setAttribute('id', id);
        newDiv.setAttribute('class', 'card-pay');
        newDiv.innerHTML = '<img class="pay" src="' + dresses[data].url + '" alt="' + dresses[data].name + '"> <div class="div-pay"> <span id="cart' + data + '">' + quantity + '</span> * <span class="product_name">' + dresses[data].name + '</span> <i class="fas fa-trash del-icon" onclick="removeFromCart(\'' + id + '\',' + data + ')"></i> <p class="dress-price">BDT ' + dresses[data].price.toFixed(2) + '</p></div>';
        document.getElementById('item-show').appendChild(newDiv);

    } else {
        quantity = parseInt(localStorage.getItem(data)) + 1;
        console.log(quantity, localStorage.getItem(data))
        localStorage.setItem(data, quantity);
        let cart_id = 'cart' + data;
        console.log(document.getElementById(cart_id).innerHTML)
        document.getElementById(cart_id).innerHTML = quantity;

    }


    var subtotal = parseFloat(document.getElementById("subtotal").innerHTML);
    subtotal += parseFloat(dresses[data].price);
    document.getElementById("subtotal").innerHTML = subtotal;

    var total = parseFloat(document.getElementById("total").innerHTML);
    total += parseFloat(dresses[data].price);
    document.getElementById("total").innerHTML = total;

    var total = parseFloat(document.getElementById("pay-total").innerHTML);
    total += parseFloat(dresses[data].price);
    document.getElementById("pay-total").innerHTML = total;
    //console.log(data);
}

function removeFromCart(data1, data2) {
    let quantity = 0;
    quantity = parseFloat(localStorage.getItem(data2));
    localStorage.removeItem(data2)

    document.getElementById(data1).remove();
    var subtotal = parseFloat(document.getElementById("subtotal").innerHTML);
    subtotal -= (parseFloat(dresses[data2].price) * quantity);
    document.getElementById("subtotal").innerHTML = subtotal;

    var total = parseFloat(document.getElementById("total").innerHTML);
    total -= (parseFloat(dresses[data2].price) * quantity);
    document.getElementById("total").innerHTML = total;

    var total = parseFloat(document.getElementById("pay-total").innerHTML);
    total -= (parseFloat(dresses[data2].price) * quantity);
    document.getElementById("pay-total").innerHTML = total;
}


window.onload = function() {
    gencard();
    localStorage.clear();
}