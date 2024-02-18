import Product from '../models/product.js';

const productsController = {
    createProduct: async (req, res) => {
        const newProduct = new Product(req.body);
        try {
            await newProduct.save();
            res.status(201).json({ message: "Product created successfully", product: newProduct });
        } catch (error) {
            res.status(500).json({ message: "Failed to create product" });
        }
    },
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find().sort({ createdAt: -1 });
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "Failed to get products" });
        }
    },
    getProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: "Failed to get product" });
        }
    },
    searchProduct: async (req, res) => {
        try {
            const result = await Product.aggregate([
                {
                    $search: {
                        index: "default",
                        text: {
                            query: req.params.key,
                            path: {
                                wildcard: "*"
                            }
                        }
                    }
                }
            ]);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: "Failed to search product" });
        }
    },
};
export default productsController;