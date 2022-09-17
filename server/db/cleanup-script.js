const fs = require('fs');
var randomHex = require('random-hex');

fs.readFile('fake-api-products.json', 'utf-8', (err, products) => {
  products = JSON.parse(products);
  products = products.map(product => {
    return {
      title: product.title,
      description: product.description,
      image: product.images[0],
      category: product.category.name.toLowerCase(),
      size: product.category.name === 'Clothes' ? ['S', 'M', 'L'] : product.category.name === 'Shoes' ? ['40', '41', '42', '43', '44', '45'] : [],
      color: ['red', 'green', 'yellow', 'orange'],
      price: product.price,
      inStock: true
    };
  });
  products = JSON.stringify(products);
  fs.writeFileSync('products.json', products);
});

