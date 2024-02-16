import mongoose from 'mongoose';
const ProductSchema = new mongoose.Schema({
    title: {type: String, require: true},
    supplier: {type: String, require: true},
    timeposted: {type: String, require: true},
    imageUrl: {type: String, require: true},
    description: {type: String, require: true},
    categoryProduct: {type: String, require: true},
    conditionProduct: {type: String, require: true},
    availabilities: {type: String, require: true},
    userProduct: {type: String, require: true},
    Product_location: {type: String, require: true},

},{ timestamps: true});

module.exports= module.model("product", ProductSchema);
export default Product;