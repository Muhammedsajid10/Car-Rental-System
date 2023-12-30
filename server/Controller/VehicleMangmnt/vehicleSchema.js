const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  model: { type: String },
  year: { type: String },
  rentalCost: { type: String },
  currentStatus: {
    type: String,
    enum: ['available', 'reserved'],
    default: 'available',
  },
  image: { type: Buffer }, 
});

const vehicleModel = mongoose.model("vehicle", vehicleSchema);

module.exports = vehicleModel;
