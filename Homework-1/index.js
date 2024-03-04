const products = [
    { id: 1, name: "Product A", price: 150 },
    { id: 2, name: "Product B", price: 90 },
    { id: 3, name: "Product C", price: 120 },
    { id: 4, name: "Product D", price: 80 },
    { id: 5, name: "Product E", price: 200 }
];

function applyDiscounts(productArray, discountPercentage, productId) {
  
  
    if (productId) {
        
        const product = productArray.find(product => product.id === productId);

      
        if (!product) { 
            return "Error";
        }

   
        product.price -= (product.price * (discountPercentage / 100));
        return product;
    }

  
    const discountedProducts = productArray.map(product => {
        if (product.price > 100) {
            product.price -= (product.price * (discountPercentage / 100));
        }
        return product;
    });

    return discountedProducts;
}

///////////////////////////////////////////////////////////////////////////

console.log(applyDiscounts(products, 10, 1));

console.log(applyDiscounts(products, 10));

