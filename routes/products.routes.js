const {Router} = require('express');
const ProductsController = require('../controllers/ProductsController');

const router = Router();

router.get('/',(req,res)=>{
    return res.status(200).json({msg:"hello world"})
})
router.post('/products/create',ProductsController.createProduct);
router.get('/products',ProductsController.getAllProducts);
router.get('/products/:id',ProductsController.getProductById);
router.put('/product/:id/update',ProductsController.updateProductById)

module.exports = router;