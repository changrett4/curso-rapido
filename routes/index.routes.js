const productRoutes = require('./products.routes');

module.exports = (app)=>{
    app.use(productRoutes);
}