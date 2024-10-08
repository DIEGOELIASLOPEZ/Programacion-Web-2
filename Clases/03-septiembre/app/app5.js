function ShowInScreen(ListOfObject) {
    var productNames = [];

    ListOfObject.forEach(function (entry) 
    {
        productNames.push(entry.product.name);
    });

    bootbox.alert(productNames.join(', ')); //product1, product2, product3
}