import Product from '../models/product';


module.exports={
    createProduct: async(req, res)=>{
        const newProduct= new Product(req.body);
        try {
            await newProduct.save();
            res.status(200).json("product created successfully");
        } catch (error) {
            res.status(500).json("failed to create product");
        }
    },
    getAllProducts: async(req, res)=>{
        const newProduct= new Product(req.body);
        try {
            await newProduct.find().sort({createdAt:-1});
            res.status(200).json("product created successfully");
        } catch (error) {
            res.status(500).json("failed to create product");
        }
    },
    getProduct: async(req, res)=>{
        const newProduct= new Product(req.body);
        try {
            await newProduct.find().sort({createdAt:-1});
            res.status(200).json("product created successfully");
        } catch (error) {
            res.status(500).json("failed to create product");
        }
    }

}