const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  usertype: { type: String }
});

// Admin Schema
const adminSchema = new mongoose.Schema({
  banner: { type: String },
  categories: { type: Array }
});

// Product Schema
const productSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  mainImg: { type: String },
  carousel: { type: Array },
  sizes: { type: Array },
  category: { type: String },
  gender: { type: String },
  price: { type: Number },
  discount: { type: Number }
});

// Order Schema
const orderSchema = new mongoose.Schema({
  userId: { type: String },
  name: { type: String },
  email: { type: String },
  mobile: { type: String },
  address: { type: String },
  pincode: { type: String },
  title: { type: String },
  description: { type: String },
  mainImg: { type: String },
  size: { type: String },
  quantity: { type: Number },
  price: { type: Number },
  discount: { type: Number },
  paymentMethod: { type: String },
  orderDate: { type: String },
  deliveryDate: { type: String },
  orderStatus: { type: String, default: "order placed" }
});

// Cart Schema
const cartSchema = new mongoose.Schema({
  userId: { type: String },
  title: { type: String },
  description: { type: String },
  mainImg: { type: String },
  size: { type: String },
  quantity: { type: String },
  price: { type: Number },
  discount: { type: Number }
});

// Export Models
const User = mongoose.model("users", userSchema);
const Admin = mongoose.model("admin", adminSchema);
const Product = mongoose.model("products", productSchema);
const Orders = mongoose.model("orders", orderSchema);
const Cart = mongoose.model("cart", cartSchema);

module.exports = { User, Admin, Product, Orders, Cart };
