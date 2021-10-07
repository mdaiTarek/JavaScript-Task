var dresses = [{
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    },
    {
        name: "Gown for girls",
        url: "https://purepng.com/public/uploads/large/purepng.com-girl-dressclothinggirl-dressfashion-girl-women-dress-cloth-apparel-631522326876jal6q.png",
        price: 2000
    }
]

function gencard() {
    var newDiv;
    dresses.forEach(element => {
        newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'card');
        newDiv.innerHTML = '<img src="' + element.url + '" alt="' + element.name + '""> <div class="container"><p>' + element.name + '</p></div>';
        document.getElementById('container-flex').appendChild(newDiv);
    });
}

window.onload = function() {
    gencard();
}