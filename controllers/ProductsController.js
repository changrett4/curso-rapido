const {Products} = require('../models');

class ProductsController{
    static async getAllProducts(req,res){
        try{
            const allProducts = await Products.findAll();
            return res.status(200).json(allProducts);
        }catch(error){
            return res.status(500).json(error);
        }
    }

    static async createProduct(req,res){
        try{
            const product = req.body;
            
            const newProduct = await Products.create(product);
            return res.status(200).json({msg:`New Product created! id: ${newProduct.id}`})

        }catch(error){
            
            return res.status(500).json(error);
        }
    }

    static async updateProductById(req,res){
        try{
            const product = req.body;
            const {id} = req.params;
            await Products.update(product,{where:{id}})
            return res.status(200).json({msg:`Product ${id} has been updated!`});

        }catch(error){
             return res.status(500).json(error);
        }
    }

    static async getProductById(req,res){
        try {
            const {id} = req.params;
            const product = await Products.findOne(
            {
                where:
                {
                    id
                }
            });
            return res.status(200).json(product);

        } catch (error) {
            return res.status(500).json(error);
        }        
    }



}

module.exports = ProductsController
