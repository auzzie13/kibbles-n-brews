const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  breed: { type: String, required: true },
  dogSize: { type: String, required: true },
  dogEnergy: { type: String, required: true },
  profileImage: { type: String, required: true },
  dogImage: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: false}
});

module.exports = mongoose.model("users", User);
