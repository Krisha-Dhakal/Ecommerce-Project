const mongoose = require("mongoose");

const orderModelSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  customer: {
    fullName: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
  },
  product: {
    productName: { type: String, required: true },
    productId: { type: String, required: true },
    productImage: { type: String, required: true },
    price: { type: Number, required: true, max: 1000000 },
  },
  status: { type: String, required: true },
});

module.exports = mongoose.model("order", orderModelSchema);
