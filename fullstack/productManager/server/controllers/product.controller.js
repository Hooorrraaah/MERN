const { Product } = require('../models/product.model')
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createProduct = (request, response) => {
    const { productTitle, productPrice, productDescription } = request.body;
    Product.create({
        productTitle,
        productPrice,
        productDescription
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}