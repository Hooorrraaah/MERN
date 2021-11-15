const { Product } = require('../models/product.model')
const {response} = require('../models/product.model')

module.exports.index= (request, response) => {
    res.json({
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
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products) )
        .catch(err => response.json(err))
}