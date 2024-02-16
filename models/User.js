import mongoose from 'mongoose';
const ProductSchema = new mongoose.Schema({
    usertitle: {type: String, require: true},
    userInitial: {type: String, require: true},
    imageUrl: {type: String, require: true},
    userProducts: {type: String, require: true},
    userfollows: {type: String, require: true},
    userfollowed: {type: String, require: true},
    blockusers: {type: String, require: true},
    reviews: {type: String, require: true},
    userfavourits: {type: String, require: true},
    notifications: {type: String, require: true},

},{ timestamps: true});

module.exports= module.model("user", ProductSchema);
export default User;