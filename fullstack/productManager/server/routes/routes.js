const Products= require('../controllers/products')

module.exports = (app)=>{
    app.get('/api', Products.home)
    app.post('/api/products',Products.create)
    app.get('/api/products', Products.getAllProducts);
    app.get('/api/products/:id', Products.getProduct);

}