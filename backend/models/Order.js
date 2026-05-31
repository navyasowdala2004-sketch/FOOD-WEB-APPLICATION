const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(

  {

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    items: Array,

    totalAmount: Number,

    paymentMethod: {
      type: String,
      default: "COD"
    },

    paymentStatus: {
      type: String,
      default: "Pending"
    },

    status: {
      type: String,
      default: "preparing"
    }

  },

  {
    timestamps: true
  }

);

module.exports = mongoose.model(
  "Order",
  orderSchema
);